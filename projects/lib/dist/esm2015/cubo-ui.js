import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Component `<cb-avatar>` to create a avatar
 * @param imageUrl Url of image
 * @param imageAlt Alt of image
 * @param type Avatar's type (circle / square)
 * @param size Avatar's size (xsmall, small, medium, large, xlarge)
 * @param lazyload Enable or disable the lazyload
 */
class CbAvatarComponent {
    constructor() {
        this.size = 'large';
        this.type = 'circle';
    }
    /**
     * @return {?}
     */
    getInitials() {
        this.nameSplit = this.name.split(' ');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.name) {
            this.nameSplit = this.name.split(' ');
            this.letters = this.nameSplit[0].charAt(0).toUpperCase() + this.nameSplit[1].charAt(0).toUpperCase();
        }
    }
}
CbAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'cb-avatar',
                template: `
  <img class="avatar" src="{{imageUrl}}" alt="{{imageAlt}}" *ngIf="imageUrl">
  <span class="initials" *ngIf="!imageUrl">{{letters}}</span>
  <ng-content></ng-content>
  `,
                styles: [`:host{background-color:#eee;background-repeat:no-repeat;background-size:cover;border-radius:50%;display:inline-block;overflow:hidden;vertical-align:middle}:host(.-extra-small){font-size:2.4rem;height:3.2rem;width:3.2rem}:host(.-small){height:4.8rem;width:4.8rem}:host(.-medium){font-size:3.2rem;height:6.4rem;width:6.4rem}:host(.-large){font-size:6.4rem;height:12.8rem;width:12.8rem}:host(.-extra-large){display:block;font-size:9.6rem;overflow:hidden;padding-bottom:calc((2/2) * 100%);position:relative;width:100%}:host(.-extra-large)>*{bottom:0;height:100%;left:0;-o-object-fit:cover;object-fit:cover;position:absolute;right:0;top:0;width:100%}:host(.-square){border-radius:0}:host(.-square)>*{-o-object-fit:contain;object-fit:contain}.avatar{background-color:#fff;display:block;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.initials{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#666;display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:600;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}`],
                encapsulation: ViewEncapsulation.Emulated,
                changeDetection: ChangeDetectionStrategy.Default,
                host: {
                    '[class.-extra-small]': 'size ===  "xsmall"',
                    '[class.-small]': 'size ===  "small"',
                    '[class.-medium]': 'size ===  "medium"',
                    '[class.-large]': 'size ===  "large"',
                    '[class.-extra-large]': 'size ===  "xlarge"',
                    '[class.-square]': 'type ===  "square"'
                }
            },] },
];
/** @nocollapse */
CbAvatarComponent.propDecorators = {
    "imageUrl": [{ type: Input },],
    "imageAlt": [{ type: Input },],
    "name": [{ type: Input },],
    "size": [{ type: Input },],
    "type": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CbAvatarModule {
}
CbAvatarModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    CbAvatarComponent
                ],
                declarations: [
                    CbAvatarComponent
                ],
                imports: [
                    CommonModule
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CbCardComponent {
}
CbCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'cb-card',
                template: `
    <ng-content></ng-content>
  `,
                styles: [`:host{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid #eee;color:#282828;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;fill:#666;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:hidden;padding:1.6rem;position:relative;width:100%}a>:host{-webkit-transition:-webkit-box-shadow .15s;transition:-webkit-box-shadow .15s;transition:box-shadow .15s;transition:box-shadow .15s,-webkit-box-shadow .15s}a>:host:hover a>:host:focus{-webkit-box-shadow:0 0 4px rgba(40,40,40,.5);box-shadow:0 0 4px rgba(40,40,40,.5)}`],
                encapsulation: ViewEncapsulation.Emulated,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
class CbCardFooterComponent {
}
CbCardFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cb-card-footer',
                template: `
    <ng-content></ng-content>
	`,
                styles: [`:host{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-top:1px solid #eee;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:2.4rem;padding-top:1.6rem;width:100%}@media only screen and (min-width:600px){:host{margin-top:auto}}`],
                encapsulation: ViewEncapsulation.Emulated,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
class CbCardTitleComponent {
}
CbCardTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'cb-card-title, [cbCardTitle]',
                template: `
    <ng-content></ng-content>
	`,
                styles: [`:host{font:600 2rem/3.2rem Roboto,sans-serif;display:block}:host:not(:first-child){margin-top:.8rem}:host:not(:last-child){margin-bottom:.2rem}`],
                encapsulation: ViewEncapsulation.Emulated,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: { 'class': 'title' }
            },] },
];
class CbCardSubtitleComponent {
}
CbCardSubtitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'cb-card-subtitle, [cbCardSubtitle]',
                template: `
    <ng-content></ng-content>
	`,
                styles: [`:host{font:400 1.8rem/2.4rem Roboto,sans-serif;display:block}:host:not(:last-child):not(:empty){margin-bottom:2.4rem}`],
                encapsulation: ViewEncapsulation.Emulated,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: { 'class': 'subtitle' }
            },] },
];
class CbCardBadgesComponent {
}
CbCardBadgesComponent.decorators = [
    { type: Component, args: [{
                selector: 'cb-card-badges',
                template: `
    <ng-content></ng-content>
	`,
                styles: [`:host{left:1.6rem;position:absolute;top:1.6rem}`],
                encapsulation: ViewEncapsulation.Emulated,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CbCardModule {
}
CbCardModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    CbCardComponent,
                    CbCardBadgesComponent,
                    CbCardFooterComponent,
                    CbCardTitleComponent,
                    CbCardSubtitleComponent,
                ],
                declarations: [
                    CbCardComponent,
                    CbCardBadgesComponent,
                    CbCardFooterComponent,
                    CbCardTitleComponent,
                    CbCardSubtitleComponent,
                ],
                imports: [
                    CommonModule
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Component `<cb-social>` to make a share action
 */
class CbSocialComponent {
}
CbSocialComponent.decorators = [
    { type: Component, args: [{
                selector: 'cb-social',
                template: `
    <ng-content></ng-content>
  `,
                styles: [`:host{display:inline-block;-webkit-filter:grayscale(100);filter:grayscale(100);margin-right:.8rem;opacity:.75;text-align:center;-webkit-transition:opacity .3s,-webkit-filter .3s;transition:opacity .3s,-webkit-filter .3s;transition:filter .3s,opacity .3s;transition:filter .3s,opacity .3s,-webkit-filter .3s;will-change:filter}:host:focus,:host:hover{-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1}`],
                encapsulation: ViewEncapsulation.Emulated,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    'role': 'button'
                }
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CbSocialModule {
}
CbSocialModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    CbSocialComponent
                ],
                declarations: [
                    CbSocialComponent
                ],
                imports: [
                    CommonModule
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { CbAvatarComponent, CbAvatarModule, CbCardComponent, CbCardFooterComponent, CbCardTitleComponent, CbCardSubtitleComponent, CbCardBadgesComponent, CbCardModule, CbSocialComponent, CbSocialModule };
//# sourceMappingURL=cubo-ui.js.map
