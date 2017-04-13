import {Component, ViewChild} from "@angular/core";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {MainviewComponent} from "./mainview/mainview.component";
import {ModalDirective } from 'ng2-bootstrap/modal';
import {Location} from "../core/location.class";
import {FiltermodalComponent} from "./filtermodal/filtermodal.component";

@Component({
    selector: "app",
    template: `
        <navbar></navbar>
        <sidebar></sidebar>
        <filtermodal></filtermodal>
        <mainview></mainview>
        `,
    styles: [
            './app.component.less', 
            '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
    ]
})
export class AppComponent {
    @ViewChild(NavbarComponent) navbarComponent: NavbarComponent;
    @ViewChild(SidebarComponent) sidebarComponent: SidebarComponent;    
    @ViewChild('childModal') public childModal: ModalDirective; 
    @ViewChild(MainviewComponent) mainviewCommponent: MainviewComponent;
}
