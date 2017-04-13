import {Component, ViewChild} from "@angular/core";
import {IsitesFilter} from "../interfaces/sitesFilter.interface";
import {SiGLService} from "../../services/siglservices.service";
import {MapService} from "../../services/map.service";

@Component({
    selector: "basemaps",
    template: `
        <div>
            <button class="basemapBtn" (click)="toggleLayer('OpenStreetMap')">
                <img id="streets" alt="streets" src="assets/streets.jpg" />
                Streets
            </button>
            <button class="basemapBtn" (click)="toggleLayer('Topo')">
                <img id="Topo" alt="Topo" src="assets/topo.jpg" />
                Topo
            </button>
            <button class="basemapBtn" (click)="toggleLayer('Terrain')">
                <img id="Terrain" alt="Terrain" src="assets/terrain.jpg" />
                Terrain
            </button>
            <button class="basemapBtn" (click)="toggleLayer('Satellite')">
                <img id="Satellite" alt="Satellite" src="assets/satellite.jpg" />
                Satellite
            </button>
            <button class="basemapBtn" (click)="toggleLayer('Gray')">
                <img id="Gray" alt="Gray" src="assets/gray.jpg" />
                Gray
            </button>
        </div>           
        `,
    styles: [
        require<any>("./basemaps.component.less")
    ]
})
export class BasemapsComponent {    
    public baseLayers: any; 
    public chosenBaselayer:string;
    constructor(private _siglService: SiGLService, private _mapService: MapService){}
    
    ngOnInit() { 
        this.baseLayers = this._mapService.baseMaps;
        this.chosenBaselayer = "Topo";
    }
    
     public toggleLayer(e:string) {
        this.chosenBaselayer = e;
        switch (e) {
            case "OpenStreetMap":
                this._mapService.map.addLayer(this._mapService.baseMaps[e]);                 
                this._mapService.map.removeLayer(this._mapService.baseMaps["Topo"]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["Terrain"]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["Satellite"]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["Gray"]);
                break;
            case "Topo":
                this._mapService.map.addLayer(this._mapService.baseMaps[e]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["OpenStreetMap"]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["Terrain"]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["Satellite"]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["Gray"]);
                break;
            case "Terrain":
                this._mapService.map.addLayer(this._mapService.baseMaps[e]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["OpenStreetMap"]); 
                this._mapService.map.removeLayer(this._mapService.baseMaps["Topo"]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["Satellite"]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["Gray"]);
                break;            
            case "Satellite":
                this._mapService.map.addLayer(this._mapService.baseMaps[e]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["OpenStreetMap"]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["Topo"]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["Terrain"]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["Gray"]);
                break;
            case "Gray":
                this._mapService.map.addLayer(this._mapService.baseMaps[e]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["OpenStreetMap"]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["Topo"]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["Terrain"]);
                this._mapService.map.removeLayer(this._mapService.baseMaps["Satellite"]);
                break;
        }
     }
}
