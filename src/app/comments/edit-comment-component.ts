/**
 * Created by rparree on 26/08/16.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tmp-comment-app',
    template: require('./edit-comment-component.html'),
    styles: [require("./edit-comment-component.scss")],
})
export class EditCommentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    
}