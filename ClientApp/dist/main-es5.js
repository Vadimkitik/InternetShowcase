function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _product_page_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./product-page/product-list/product-list.component */
    "./src/app/product-page/product-list/product-list.component.ts");
    /* harmony import */


    var _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shop/shop.component */
    "./src/app/shop/shop.component.ts");
    /* harmony import */


    var _product_page_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./product-page/product-view/product-view.component */
    "./src/app/product-page/product-view/product-view.component.ts");

    var appRoutes = [{
      path: '',
      component: _product_page_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]
    }, {
      path: 'shop',
      component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"]
    }, {
      path: 'product/view/:id',
      component: _product_page_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_4__["ProductViewComponent"]
    } // { path: '**', component: NotFoundComponent }
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "wfm-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "wfm-footer");
        }
      },
      directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: tokenGetter, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
      return tokenGetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./not-found.component */
    "./src/app/not-found.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _product_page_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./product-page/product-list/product-list.component */
    "./src/app/product-page/product-list/product-list.component.ts");
    /* harmony import */


    var _product_page_product_form_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./product-page/product-form/product-create/product-create.component */
    "./src/app/product-page/product-form/product-create/product-create.component.ts");
    /* harmony import */


    var _product_page_product_form_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./product-page/product-form/product-edit/product-edit.component */
    "./src/app/product-page/product-form/product-edit/product-edit.component.ts");
    /* harmony import */


    var _product_page_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./product-page/product-form/product-form.component */
    "./src/app/product-page/product-form/product-form.component.ts");
    /* harmony import */


    var _shop_shop_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shop/shop.component */
    "./src/app/shop/shop.component.ts");
    /* harmony import */


    var _product_page_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./product-page/product-view/product-view.component */
    "./src/app/product-page/product-view/product-view.component.ts");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./shared/components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");

    ;

    function tokenGetter() {
      return localStorage.getItem("jwt");
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"].forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ["localhost:5000"],
          blacklistedRoutes: []
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"], _product_page_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"], _product_page_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_13__["ProductFormComponent"], _product_page_product_form_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_11__["ProductCreateComponent"], _product_page_product_form_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_12__["ProductEditComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_14__["ShopComponent"], _product_page_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_15__["ProductViewComponent"], _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"].forRoot({
            config: {
              tokenGetter: tokenGetter,
              whitelistedDomains: ["localhost:5000"],
              blacklistedRoutes: []
            }
          })],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"], _product_page_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"], _product_page_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_13__["ProductFormComponent"], _product_page_product_form_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_11__["ProductCreateComponent"], _product_page_product_form_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_12__["ProductEditComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_14__["ShopComponent"], _product_page_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_15__["ProductViewComponent"], _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");

    var MaterialComponents = [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[MaterialComponents], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [MaterialComponents],
          exports: [MaterialComponents]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/not-found.component.ts":
  /*!****************************************!*\
    !*** ./src/app/not-found.component.ts ***!
    \****************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent = function NotFoundComponent() {
      _classCallCheck(this, NotFoundComponent);
    };

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["ng-component"]],
      decls: 2,
      vars: 0,
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: '<h2>Not Found</h2>'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/product-page/product-form/product-create/product-create.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/product-page/product-form/product-create/product-create.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ProductCreateComponent */

  /***/
  function srcAppProductPageProductFormProductCreateProductCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function () {
      return ProductCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_models_product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/models/product.model */
    "./src/app/shared/models/product.model.ts");
    /* harmony import */


    var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/product.service */
    "./src/app/shared/services/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _product_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../product-form.component */
    "./src/app/product-page/product-form/product-form.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var _c0 = function _c0() {
      return ["/", "products"];
    };

    var ProductCreateComponent =
    /*#__PURE__*/
    function () {
      function ProductCreateComponent(productService, router) {
        _classCallCheck(this, ProductCreateComponent);

        this.productService = productService;
        this.router = router;
        this.product = new _shared_models_product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](); // добавляемый объект
      }

      _createClass(ProductCreateComponent, [{
        key: "save",
        value: function save() {
          var _this = this;

          this.productService.createProduct(this.product).subscribe(function (data) {
            return _this.router.navigateByUrl("/system/products");
          });
        }
      }]);

      return ProductCreateComponent;
    }();

    ProductCreateComponent.ɵfac = function ProductCreateComponent_Factory(t) {
      return new (t || ProductCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ProductCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductCreateComponent,
      selectors: [["ng-component"]],
      decls: 9,
      vars: 3,
      consts: [[3, "product", "productChange"], [1, "form-group"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "routerLink"]],
      template: function ProductCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u0447\u0435\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "product-form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("productChange", function ProductCreateComponent_Template_product_form_productChange_3_listener($event) {
            return ctx.product = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCreateComponent_Template_button_click_5_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041E\u0442\u043C\u0435\u043D\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx.product);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        }
      },
      directives: [_product_form_component__WEBPACK_IMPORTED_MODULE_4__["ProductFormComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtZm9ybS9wcm9kdWN0LWNyZWF0ZS9FOlxcUHJvamVjdHNcXEludGVybmV0U2hvd2Nhc2VcXENsaWVudEFwcC9zcmNcXGFwcFxccHJvZHVjdC1wYWdlXFxwcm9kdWN0LWZvcm1cXHByb2R1Y3QtY3JlYXRlXFxwcm9kdWN0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtZm9ybS9wcm9kdWN0LWNyZWF0ZS9wcm9kdWN0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1mb3JtL3Byb2R1Y3QtY3JlYXRlL3Byb2R1Y3QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9IiwiYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './product-create.component.html',
          styleUrls: ['./product-create.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/product-page/product-form/product-edit/product-edit.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/product-page/product-form/product-edit/product-edit.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProductEditComponent */

  /***/
  function srcAppProductPageProductFormProductEditProductEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function () {
      return ProductEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/services/product.service */
    "./src/app/shared/services/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _product_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../product-form.component */
    "./src/app/product-page/product-form/product-form.component.ts");

    function ProductEditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0442\u043E\u0432\u0430\u0440\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "product-form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("productChange", function ProductEditComponent_div_0_Template_product_form_productChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.product = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductEditComponent_div_0_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx_r2.product);
      }
    }

    var _c0 = function _c0() {
      return ["/", "products"];
    };

    var ProductEditComponent =
    /*#__PURE__*/
    function () {
      function ProductEditComponent(productService, router, activeRoute) {
        _classCallCheck(this, ProductEditComponent);

        this.productService = productService;
        this.router = router;
        this.loaded = false;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
      }

      _createClass(ProductEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (this.id) this.productService.getProduct(this.id).subscribe(function (data) {
            _this2.product = data;
            if (_this2.product != null) _this2.loaded = true;
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          this.productService.updateProduct(this.product).subscribe(function (data) {
            return _this3.router.navigateByUrl("/system/products");
          });
        }
      }]);

      return ProductEditComponent;
    }();

    ProductEditComponent.ɵfac = function ProductEditComponent_Factory(t) {
      return new (t || ProductEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ProductEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductEditComponent,
      selectors: [["ng-component"]],
      decls: 3,
      vars: 3,
      consts: [[4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "routerLink"], [3, "product", "productChange"], [1, "form-group"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function ProductEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductEditComponent_div_0_Template, 7, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041D\u0430\u0437\u0430\u0434");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"]],
      styles: ["button[_ngcontent-%COMP%] {\n  margin: 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtZm9ybS9wcm9kdWN0LWVkaXQvRTpcXFByb2plY3RzXFxJbnRlcm5ldFNob3djYXNlXFxDbGllbnRBcHAvc3JjXFxhcHBcXHByb2R1Y3QtcGFnZVxccHJvZHVjdC1mb3JtXFxwcm9kdWN0LWVkaXRcXHByb2R1Y3QtZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtZm9ybS9wcm9kdWN0LWVkaXQvcHJvZHVjdC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtZm9ybS9wcm9kdWN0LWVkaXQvcHJvZHVjdC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxuICB9IiwiYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHggMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './product-edit.component.html',
          styleUrls: ['./product-edit.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/product-page/product-form/product-form.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/product-page/product-form/product-form.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ProductFormComponent */

  /***/
  function srcAppProductPageProductFormProductFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function () {
      return ProductFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ProductFormComponent = function ProductFormComponent() {
      _classCallCheck(this, ProductFormComponent);
    };

    ProductFormComponent.ɵfac = function ProductFormComponent_Factory(t) {
      return new (t || ProductFormComponent)();
    };

    ProductFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductFormComponent,
      selectors: [["product-form"]],
      inputs: {
        product: "product"
      },
      decls: 17,
      vars: 4,
      consts: [[1, "product-form"], [1, "product-full-width"], ["matInput", "", "placeholder", "\u0420\u043E\u0437\u044B, \u0442\u044E\u043B\u044C\u043F\u0430\u043D\u044B, \u0431\u043E\u0436\u0438\u0439 \u043E\u0434\u0443\u0432\u0430\u043D\u0447\u0438\u043A...", "type", "text", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "5$", "type", "number", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "4", "type", "number", 3, "ngModel", "ngModelChange"]],
      template: function ProductFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductFormComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.product.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0426\u0435\u043D\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductFormComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.product.price = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0421\u0442\u0430\u0440\u0430\u044F \u0446\u0435\u043D\u0430\u0411 \u0435\u0441\u043B\u0438 \u043D\u0443\u0436\u043D\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductFormComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.product.oldPrice = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0424\u043E\u0442\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductFormComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.product.imageUrl = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.oldPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.imageUrl);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]],
      styles: [".product-form[_ngcontent-%COMP%], .product-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtZm9ybS9FOlxcUHJvamVjdHNcXEludGVybmV0U2hvd2Nhc2VcXENsaWVudEFwcC9zcmNcXGFwcFxccHJvZHVjdC1wYWdlXFxwcm9kdWN0LWZvcm1cXHByb2R1Y3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtZm9ybS9wcm9kdWN0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1mb3JtL3Byb2R1Y3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWZvcm0sIC5wcm9kdWN0LWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwiLnByb2R1Y3QtZm9ybSwgLnByb2R1Y3QtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "product-form",
          templateUrl: './product-form.component.html',
          styleUrls: ['./product-form.component.scss']
        }]
      }], null, {
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/product-page/product-list/product-list.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/product-page/product-list/product-list.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppProductPageProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/services/product.service */
    "./src/app/shared/services/product.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["product/view", a1];
    };

    function ProductListComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, product_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", product_r1.oldPrice, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", product_r1.price, " ");
      }
    }

    var ProductListComponent =
    /*#__PURE__*/
    function () {
      function ProductListComponent(productService) {
        _classCallCheck(this, ProductListComponent);

        this.productService = productService;
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.load();
        }
      }, {
        key: "load",
        value: function load() {
          var _this4 = this;

          this.productService.getProducts().subscribe(function (products) {
            _this4.products = products;
          });
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
      return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]));
    };

    ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductListComponent,
      selectors: [["ng-component"]],
      decls: 7,
      vars: 1,
      consts: [[1, "h1-line"], [1, "section"], [1, "container"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card"], [1, "card__image"], ["alt", "", 3, "src"], [1, "card__hover"], [1, "card__button", 3, "routerLink"], [1, "card__title"], [1, "card__price"]],
      template: function ProductListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0426\u0432\u0435\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductListComponent_div_6_Template, 13, 7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtcGFnZS9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './product-list.component.html',
          styleUrls: ['product-list.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/product-page/product-view/product-view.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/product-page/product-view/product-view.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ProductViewComponent */

  /***/
  function srcAppProductPageProductViewProductViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductViewComponent", function () {
      return ProductViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/product.service */
    "./src/app/shared/services/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProductViewComponent =
    /*#__PURE__*/
    function () {
      function ProductViewComponent(productService, activeRoute) {
        _classCallCheck(this, ProductViewComponent);

        this.productService = productService;
        this.loaded = false;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
      }

      _createClass(ProductViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          if (this.id != null) {
            this.productService.getProduct(this.id).subscribe(function (data) {
              _this5.product = data;
              if (_this5.product != null) _this5.loaded = true;
              console.log();
            });
          }
        }
      }]);

      return ProductViewComponent;
    }();

    ProductViewComponent.ɵfac = function ProductViewComponent_Factory(t) {
      return new (t || ProductViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ProductViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductViewComponent,
      selectors: [["product-view"]],
      decls: 29,
      vars: 7,
      consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "product-cont"], [1, "product__image"], ["alt", "", 3, "src"], [1, "product__info-block"], [1, "product__info-price"], [1, "product-info-price"], [1, "product-info-price__title"], [1, "product-info-price__val"], [1, "product-info-price__val-old"], [1, "button-outline", 3, "routerLink"], [1, "product-description"], [1, "column"]],
      template: function ProductViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0426\u0435\u043D\u0430:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0440\u0443\u0431. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u0440\u0443\u0431. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0423\u0442\u043E\u0447\u043D\u0438\u0442\u044C \u043D\u0430\u043B\u0438\u0447\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.oldPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.categoryId, " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtcGFnZS9wcm9kdWN0LXZpZXcvcHJvZHVjdC12aWV3LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'product-view',
          templateUrl: './product-view.component.html',
          styleUrls: ['./product-view.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["wfm-footer"]],
      decls: 6,
      vars: 0,
      consts: [[1, "footer"], [1, "container"], [1, "footer-info"], [1, "footer__copyright"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0412 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u0426\u0432\u0435\u0442\u043E\u0432 Alleutina Shop \u0412\u0430\u0441 \u0436\u0434\u0435\u0442 \u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442 \u0446\u0432\u0435\u0442\u043E\u0432, \u0436\u0438\u0432\u044B\u0435 \u0438 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0443\u043D\u043D\u044B\u0435, \u0433\u0440\u0443\u043D\u0442, \u0445\u0438\u043C\u0438\u044F \u0434\u043B\u044F \u043E\u0433\u043E\u0440\u043E\u0434\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0434\u043B\u044F \u0434\u0443\u0448\u0438. \u041D\u0430\u0448 \u044D\u043A\u0441\u043F\u0435\u0440\u0442 \u043F\u043E \u0444\u043B\u043E\u0440\u0438\u0441\u0442\u0438\u043A\u0435 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0412\u0430\u043C \u0432 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0431\u0443\u043A\u0435\u0442\u0430, \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430. \u0416\u0434\u0435\u043C \u0432\u0430\u0441 \u0432 \u043D\u0430\u0448\u0435\u043C \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u0432 \u0413\u0440\u043E\u0434\u043D\u043E! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA9 \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u0426\u0432\u0435\u0442\u043E\u0432 Alleutina Shop \u0432 \u0413\u0440\u043E\u0434\u043D\u043E, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'wfm-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["wfm-header"]],
      decls: 51,
      vars: 7,
      consts: [[1, "social"], [1, "container"], [1, "row", "clearfix"], [1, "header-phone"], [1, "header-phone-cont"], ["href", "tel:+375 29 609 24 61", 1, "header-phonei-item", "mts"], [1, "header-social"], ["href", "https://www.instagram.com/alleutina_shop/"], [1, "fab", "fa-instagram"], [1, "header"], [1, "row"], [1, "col-md-3"], [1, "logo"], [1, "col-md-9"], [1, "navbar"], ["id", "sub-menu", 1, "nav"], [1, "", 3, "routerLink"], ["src", "assets/img/bg/bg-main1.jpg", "alt", "", 1, "header_img"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+375(29)-609-24-61");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Instagram:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "header", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Alleutina Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0426\u0432\u0435\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0411\u0443\u043A\u0435\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0428\u0430\u0440\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0413\u043E\u0440\u0448\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u0423\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0410\u043A\u0446\u0438\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/shop");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'wfm-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/models/product.model.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/models/product.model.ts ***!
    \************************************************/

  /*! exports provided: Product */

  /***/
  function srcAppSharedModelsProductModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });

    var Product = function Product(id, name, description, price, oldPrice, imageUrl, isFavourite, available, categoryId, Category) {
      _classCallCheck(this, Product);

      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.oldPrice = oldPrice;
      this.imageUrl = imageUrl;
      this.isFavourite = isFavourite;
      this.available = available;
      this.categoryId = categoryId;
      this.Category = Category;
    };
    /***/

  },

  /***/
  "./src/app/shared/services/auth-guard.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/services/auth-guard.service.ts ***!
    \*******************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./token-storage.service */
    "./src/app/shared/services/token-storage.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(jwtHelper, router, tokenStorage) {
        _classCallCheck(this, AuthGuard);

        this.jwtHelper = jwtHelper;
        this.router = router;
        this.tokenStorage = tokenStorage;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var token = this.tokenStorage.getUser();
          console.log(token);

          if (token && !this.jwtHelper.isTokenExpired(token)) {
            console.log(this.jwtHelper.decodeToken(token));
            return true;
          }

          this.router.navigate(["login"]);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.url = "http://localhost:5000/api/auth/login"; // private url = "api/auth/login";

        this.isAuthenticated = false;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
      }

      _createClass(AuthService, [{
        key: "login1",
        value: function login1(form) {
          var credentials = JSON.stringify(form);
          return this.http.post(this.url, credentials, {
            headers: this.headers
          });
        }
      }, {
        key: "login",
        value: function login() {
          this.isAuthenticated = true;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.isAuthenticated = false;
          localStorage.removeItem("jwt");
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.isAuthenticated;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/category.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/services/category.service.ts ***!
    \*****************************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppSharedServicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CategoryService =
    /*#__PURE__*/
    function () {
      //private url = "api/categories";
      function CategoryService(http) {
        _classCallCheck(this, CategoryService);

        this.http = http;
        this.url = "http://localhost:5000/api/categories";
      }

      _createClass(CategoryService, [{
        key: "getCategories",
        value: function getCategories() {
          return this.http.get(this.url);
        }
      }, {
        key: "getCategoriesByType",
        value: function getCategoriesByType(type) {
          return this.http.get(this.url + '/' + type);
        }
      }, {
        key: "geCategory",
        value: function geCategory(id) {
          return this.http.get(this.url + '/' + id);
        }
      }, {
        key: "createCategory",
        value: function createCategory(category) {
          return this.http.post(this.url, category);
        }
      }, {
        key: "updateCategory",
        value: function updateCategory(category) {
          return this.http.put(this.url, category);
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory(id) {
          return this.http["delete"](this.url + '/' + id);
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ɵfac = function CategoryService_Factory(t) {
      return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CategoryService,
      factory: CategoryService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/product.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/product.service.ts ***!
    \****************************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppSharedServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProductService =
    /*#__PURE__*/
    function () {
      //private url = "api/products";
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.url = "http://localhost:5000/api/products";
      }

      _createClass(ProductService, [{
        key: "getProducts",
        value: function getProducts() {
          return this.http.get(this.url);
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          return this.http.get("".concat(this.url, "/").concat(id));
        }
      }, {
        key: "createProduct",
        value: function createProduct(product) {
          return this.http.post(this.url, product);
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(product) {
          return this.http.put(this.url, product);
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(id) {
          return this.http["delete"](this.url + '/' + id);
        }
      }]);

      return ProductService;
    }();

    ProductService.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/token-storage.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/token-storage.service.ts ***!
    \**********************************************************/

  /*! exports provided: TokenStorageService */

  /***/
  function srcAppSharedServicesTokenStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
      return TokenStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TOKEN_KEY = 'auth-token';
    var USER_KEY = 'auth-user';

    var TokenStorageService =
    /*#__PURE__*/
    function () {
      function TokenStorageService() {
        _classCallCheck(this, TokenStorageService);
      }

      _createClass(TokenStorageService, [{
        key: "signOut",
        value: function signOut() {
          window.localStorage.clear();
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          window.localStorage.removeItem(TOKEN_KEY);
          window.localStorage.setItem(TOKEN_KEY, token);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem(TOKEN_KEY);
        }
      }, {
        key: "saveUser",
        value: function saveUser(user) {
          window.localStorage.removeItem(USER_KEY);
          window.localStorage.setItem(USER_KEY, JSON.stringify(user));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return JSON.parse(localStorage.getItem(USER_KEY));
        }
      }]);

      return TokenStorageService;
    }();

    TokenStorageService.ɵfac = function TokenStorageService_Factory(t) {
      return new (t || TokenStorageService)();
    };

    TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenStorageService,
      factory: TokenStorageService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/users.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/users.service.ts ***!
    \**************************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppSharedServicesUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UsersService =
    /*#__PURE__*/
    function () {
      //private url = "api/users";
      function UsersService(http) {
        _classCallCheck(this, UsersService);

        this.http = http;
        this.url = 'http://localhost:5000/api/users';
      }

      _createClass(UsersService, [{
        key: "getUserByEmail",
        value: function getUserByEmail(email) {
          return this.http.get(this.url + "/".concat(email));
        }
      }, {
        key: "createUser",
        value: function createUser(user) {
          return this.http.post(this.url, user);
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(this.url);
        }
      }, {
        key: "getUserById",
        value: function getUserById(id) {
          return this.http.get(this.url + '/' + id);
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          return this.http.put(this.url, user);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          return this.http["delete"](this.url + '/' + id);
        }
      }]);

      return UsersService;
    }();

    UsersService.ɵfac = function UsersService_Factory(t) {
      return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsersService,
      factory: UsersService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/product.service */
    "./src/app/shared/services/product.service.ts");
    /* harmony import */


    var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/users.service */
    "./src/app/shared/services/users.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/shared/services/auth-guard.service.ts");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/token-storage.service */
    "./src/app/shared/services/token-storage.service.ts");
    /* harmony import */


    var _services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/category.service */
    "./src/app/shared/services/category.service.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"], _services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"]],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
          exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
          providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"], _services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shop/shop.component.ts":
  /*!****************************************!*\
    !*** ./src/app/shop/shop.component.ts ***!
    \****************************************/

  /*! exports provided: ShopComponent */

  /***/
  function srcAppShopShopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopComponent", function () {
      return ShopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ShopComponent =
    /*#__PURE__*/
    function () {
      function ShopComponent() {
        _classCallCheck(this, ShopComponent);
      }

      _createClass(ShopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShopComponent;
    }();

    ShopComponent.ɵfac = function ShopComponent_Factory(t) {
      return new (t || ShopComponent)();
    };

    ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShopComponent,
      selectors: [["wfm-shop"]],
      decls: 32,
      vars: 0,
      consts: [[1, "h1-line"], [1, "container"], [1, "row"], [1, "col-md-12", "content"], [1, "contact"], [1, "itemBody"], ["id", "slide-contact", 1, "accordion"], [1, "page-header"], [1, "contact-address-cont"], [1, "contact-address-item"], [1, "contact-address-text", "under-footer-address-item"], [1, "under-footer-address-text"], [1, "contact-address-item__map"], ["src", "https://yandex.ru/map-widget/v1/?um=constructor%3A1af245c1f85b3aa26633dbb7b1909d90947287baa829aeecbcb7f9392a0459b4&source=constructor", "width", "600", "height", "300", "frameborder", "0"], [1, "contact-address-item__info"]],
      template: function ShopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D \"Alleutina Shop\" \u0432 \u0413\u0440\u043E\u0434\u043D\u043E:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041F\u043E\u043A\u0443\u043F\u0430\u0439\u0442\u0435 \u0446\u0432\u0435\u0442\u044B \u043D\u0430 \u0432\u0430\u0448 \u0432\u044B\u0431\u043E\u0440, \u0436\u0438\u0432\u044B\u0435 \u043B\u0438\u0431\u043E \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435. \u0418\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442 \u0433\u0440\u0443\u043D\u0442 \u0434\u043B\u044F \u043E\u0433\u043E\u0440\u043E\u0434\u0430? \u0425\u0438\u043C\u0438\u044F \u043E\u0442 \u0432\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u0435\u0439? \u0410 \u043C\u043E\u0436\u0435\u0442 \u0433\u043E\u0440\u0448\u043A\u0438 \u0434\u043B\u044F \u0446\u0432\u0435\u0442\u043E\u0432? \u041F\u0440\u0438\u0445\u043E\u0434\u0438 \u0438 \u0432\u044B\u0431\u0438\u0440\u0430\u0439! \u041B\u0443\u0447\u0448\u0438\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u0438\u0437 \u0434\u0432\u0435\u0440\u0435\u0441\u0438\u043D\u044B \u0443\u043A\u0440\u0430\u0441\u044F\u0442 \u0432\u0430\u0448 \u0441\u0430\u0434. \u0421\u0442\u043E\u0438\u0442 \u043B\u0438 \u0431\u0440\u0430\u0442\u044C \u0448\u0430\u0440\u0438\u043A\u0438, \u043F\u0440\u0438\u0434\u0430\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043A\u0443 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u0447\u043D\u043E\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435? \u041A\u043E\u043D\u0435\u0447\u043D\u043E \u0441\u0442\u043E\u0438\u0442 \u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u0443 \u043D\u0430\u0441! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u0443\u043B. \u0420\u043E\u0433\u0430\u0447\u0435\u0432\u0441\u043A\u043E\u0433\u043E 25 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u043C\u0442\u0441 +375(29)-609-24-61 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u0412\u0442-\u0412\u0441\u043A: \u0441 10:00 \u0434\u043E 19:00 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "iframe", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u0433\u0440. \u0413\u0440\u043E\u0434\u043D\u043E, \u043F\u043E\u0441\u0451\u043B\u043E\u043A \u042E\u0436\u043D\u044B\u0439, \u0443\u043B. \u0420\u043E\u0433\u0430\u0447\u0435\u0432\u0441\u043A\u043E\u0433\u043E 25. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3Avc2hvcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'wfm-shop',
          templateUrl: './shop.component.html',
          styleUrls: ['./shop.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    var platform = Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])();
    platform.bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Projects\InternetShowcase\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map