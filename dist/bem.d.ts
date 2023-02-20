import { Renderer2, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BemConfig {
    separators?: Array<string>;
    ignoreValues?: boolean;
    modCase?: string;
}
export declare class BlockDirective {
    element: ElementRef;
    renderer: Renderer2;
    name: string;
    mod: string | string[] | object;
    private _mods;
    private _modSerialized;
    constructor(element: ElementRef, renderer: Renderer2, name: string);
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BlockDirective, [null, null, { attribute: "block"; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BlockDirective, "[block]", never, { "mod": "mod"; }, {}, never, never, false, never>;
}
export declare class ElemDirective {
    element: ElementRef;
    renderer: Renderer2;
    blockName: string;
    name: string;
    mod: string | string[] | object;
    private _mods;
    private _modSerialized;
    constructor(element: ElementRef, renderer: Renderer2, name: string, block: BlockDirective);
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ElemDirective, [null, null, { attribute: "elem"; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ElemDirective, "[elem]", never, { "mod": "mod"; }, {}, never, never, false, never>;
}
export declare class ModDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<ModDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ModDirective, "[mod]", never, {}, {}, never, never, false, never>;
}
export declare class BemModule {
    static config(data: BemConfig): typeof BemModule;
    static ɵfac: i0.ɵɵFactoryDeclaration<BemModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BemModule, [typeof BlockDirective, typeof ElemDirective, typeof ModDirective], never, [typeof BlockDirective, typeof ElemDirective, typeof ModDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BemModule>;
}
