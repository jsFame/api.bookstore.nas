'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api.bookstore.nas documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-0a105298431509b52812b621358483f15120ed5f3f49980792c8f79dc6359af6dc09e65a3226bbfaf7b88e203d667576a5f247f42845f295e02d91f4f92491b3"' : 'data-bs-target="#xs-controllers-links-module-AppModule-0a105298431509b52812b621358483f15120ed5f3f49980792c8f79dc6359af6dc09e65a3226bbfaf7b88e203d667576a5f247f42845f295e02d91f4f92491b3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-0a105298431509b52812b621358483f15120ed5f3f49980792c8f79dc6359af6dc09e65a3226bbfaf7b88e203d667576a5f247f42845f295e02d91f4f92491b3"' :
                                            'id="xs-controllers-links-module-AppModule-0a105298431509b52812b621358483f15120ed5f3f49980792c8f79dc6359af6dc09e65a3226bbfaf7b88e203d667576a5f247f42845f295e02d91f4f92491b3"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-0a105298431509b52812b621358483f15120ed5f3f49980792c8f79dc6359af6dc09e65a3226bbfaf7b88e203d667576a5f247f42845f295e02d91f4f92491b3"' : 'data-bs-target="#xs-injectables-links-module-AppModule-0a105298431509b52812b621358483f15120ed5f3f49980792c8f79dc6359af6dc09e65a3226bbfaf7b88e203d667576a5f247f42845f295e02d91f4f92491b3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0a105298431509b52812b621358483f15120ed5f3f49980792c8f79dc6359af6dc09e65a3226bbfaf7b88e203d667576a5f247f42845f295e02d91f4f92491b3"' :
                                        'id="xs-injectables-links-module-AppModule-0a105298431509b52812b621358483f15120ed5f3f49980792c8f79dc6359af6dc09e65a3226bbfaf7b88e203d667576a5f247f42845f295e02d91f4f92491b3"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-787ba1e301e7a352be889ed997489853b583b80a4a05c7bcce38e5c7ed81dc8fbe5e2baa946c1dc528ea07e66d16fd4c180980da9a43fcb6d0010061659dc5e2"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-787ba1e301e7a352be889ed997489853b583b80a4a05c7bcce38e5c7ed81dc8fbe5e2baa946c1dc528ea07e66d16fd4c180980da9a43fcb6d0010061659dc5e2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-787ba1e301e7a352be889ed997489853b583b80a4a05c7bcce38e5c7ed81dc8fbe5e2baa946c1dc528ea07e66d16fd4c180980da9a43fcb6d0010061659dc5e2"' :
                                            'id="xs-controllers-links-module-AuthModule-787ba1e301e7a352be889ed997489853b583b80a4a05c7bcce38e5c7ed81dc8fbe5e2baa946c1dc528ea07e66d16fd4c180980da9a43fcb6d0010061659dc5e2"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-787ba1e301e7a352be889ed997489853b583b80a4a05c7bcce38e5c7ed81dc8fbe5e2baa946c1dc528ea07e66d16fd4c180980da9a43fcb6d0010061659dc5e2"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-787ba1e301e7a352be889ed997489853b583b80a4a05c7bcce38e5c7ed81dc8fbe5e2baa946c1dc528ea07e66d16fd4c180980da9a43fcb6d0010061659dc5e2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-787ba1e301e7a352be889ed997489853b583b80a4a05c7bcce38e5c7ed81dc8fbe5e2baa946c1dc528ea07e66d16fd4c180980da9a43fcb6d0010061659dc5e2"' :
                                        'id="xs-injectables-links-module-AuthModule-787ba1e301e7a352be889ed997489853b583b80a4a05c7bcce38e5c7ed81dc8fbe5e2baa946c1dc528ea07e66d16fd4c180980da9a43fcb6d0010061659dc5e2"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BookModule.html" data-type="entity-link" >BookModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BookModule-b17ae14b0733fe01d0acb7b502fb014be706d4fbbe122af190f98d8945efe96aba680221eb0daeec62769e96c25b8b808fb9bbcc1dfc7a5fb2bb975c8d8afcc3"' : 'data-bs-target="#xs-controllers-links-module-BookModule-b17ae14b0733fe01d0acb7b502fb014be706d4fbbe122af190f98d8945efe96aba680221eb0daeec62769e96c25b8b808fb9bbcc1dfc7a5fb2bb975c8d8afcc3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BookModule-b17ae14b0733fe01d0acb7b502fb014be706d4fbbe122af190f98d8945efe96aba680221eb0daeec62769e96c25b8b808fb9bbcc1dfc7a5fb2bb975c8d8afcc3"' :
                                            'id="xs-controllers-links-module-BookModule-b17ae14b0733fe01d0acb7b502fb014be706d4fbbe122af190f98d8945efe96aba680221eb0daeec62769e96c25b8b808fb9bbcc1dfc7a5fb2bb975c8d8afcc3"' }>
                                            <li class="link">
                                                <a href="controllers/BookController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BookModule-b17ae14b0733fe01d0acb7b502fb014be706d4fbbe122af190f98d8945efe96aba680221eb0daeec62769e96c25b8b808fb9bbcc1dfc7a5fb2bb975c8d8afcc3"' : 'data-bs-target="#xs-injectables-links-module-BookModule-b17ae14b0733fe01d0acb7b502fb014be706d4fbbe122af190f98d8945efe96aba680221eb0daeec62769e96c25b8b808fb9bbcc1dfc7a5fb2bb975c8d8afcc3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BookModule-b17ae14b0733fe01d0acb7b502fb014be706d4fbbe122af190f98d8945efe96aba680221eb0daeec62769e96c25b8b808fb9bbcc1dfc7a5fb2bb975c8d8afcc3"' :
                                        'id="xs-injectables-links-module-BookModule-b17ae14b0733fe01d0acb7b502fb014be706d4fbbe122af190f98d8945efe96aba680221eb0daeec62769e96c25b8b808fb9bbcc1dfc7a5fb2bb975c8d8afcc3"' }>
                                        <li class="link">
                                            <a href="injectables/BookService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrderModule-9bd5548d96959b7053935b7142d1d201204064d7661b85479844c23b5b354a23e19f8d18a2910ccdd2f6bb55d692ca77ffe54b494cf866a0381a911be55b6b41"' : 'data-bs-target="#xs-controllers-links-module-OrderModule-9bd5548d96959b7053935b7142d1d201204064d7661b85479844c23b5b354a23e19f8d18a2910ccdd2f6bb55d692ca77ffe54b494cf866a0381a911be55b6b41"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-9bd5548d96959b7053935b7142d1d201204064d7661b85479844c23b5b354a23e19f8d18a2910ccdd2f6bb55d692ca77ffe54b494cf866a0381a911be55b6b41"' :
                                            'id="xs-controllers-links-module-OrderModule-9bd5548d96959b7053935b7142d1d201204064d7661b85479844c23b5b354a23e19f8d18a2910ccdd2f6bb55d692ca77ffe54b494cf866a0381a911be55b6b41"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrderModule-9bd5548d96959b7053935b7142d1d201204064d7661b85479844c23b5b354a23e19f8d18a2910ccdd2f6bb55d692ca77ffe54b494cf866a0381a911be55b6b41"' : 'data-bs-target="#xs-injectables-links-module-OrderModule-9bd5548d96959b7053935b7142d1d201204064d7661b85479844c23b5b354a23e19f8d18a2910ccdd2f6bb55d692ca77ffe54b494cf866a0381a911be55b6b41"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-9bd5548d96959b7053935b7142d1d201204064d7661b85479844c23b5b354a23e19f8d18a2910ccdd2f6bb55d692ca77ffe54b494cf866a0381a911be55b6b41"' :
                                        'id="xs-injectables-links-module-OrderModule-9bd5548d96959b7053935b7142d1d201204064d7661b85479844c23b5b354a23e19f8d18a2910ccdd2f6bb55d692ca77ffe54b494cf866a0381a911be55b6b41"' }>
                                        <li class="link">
                                            <a href="injectables/BookService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-b450d622665d914bb7a48e2013c30446d3b4c970c9c681d1f192f1aa5793e66fc7639a4edd40909bac6a4ab0b1f2e4338fdab3d4184c82f8c1ffcab33ce4f6b5"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-b450d622665d914bb7a48e2013c30446d3b4c970c9c681d1f192f1aa5793e66fc7639a4edd40909bac6a4ab0b1f2e4338fdab3d4184c82f8c1ffcab33ce4f6b5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-b450d622665d914bb7a48e2013c30446d3b4c970c9c681d1f192f1aa5793e66fc7639a4edd40909bac6a4ab0b1f2e4338fdab3d4184c82f8c1ffcab33ce4f6b5"' :
                                        'id="xs-injectables-links-module-PrismaModule-b450d622665d914bb7a48e2013c30446d3b4c970c9c681d1f192f1aa5793e66fc7639a4edd40909bac6a4ab0b1f2e4338fdab3d4184c82f8c1ffcab33ce4f6b5"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-cb5ff7b6550e3c3baecd5f965d2407027adb24a3af2955cc5738a959d3b7c7c71c184a385421efe315843e2dfd62a0d55376d243a11f509de512dd031635a420"' : 'data-bs-target="#xs-controllers-links-module-UserModule-cb5ff7b6550e3c3baecd5f965d2407027adb24a3af2955cc5738a959d3b7c7c71c184a385421efe315843e2dfd62a0d55376d243a11f509de512dd031635a420"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-cb5ff7b6550e3c3baecd5f965d2407027adb24a3af2955cc5738a959d3b7c7c71c184a385421efe315843e2dfd62a0d55376d243a11f509de512dd031635a420"' :
                                            'id="xs-controllers-links-module-UserModule-cb5ff7b6550e3c3baecd5f965d2407027adb24a3af2955cc5738a959d3b7c7c71c184a385421efe315843e2dfd62a0d55376d243a11f509de512dd031635a420"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-cb5ff7b6550e3c3baecd5f965d2407027adb24a3af2955cc5738a959d3b7c7c71c184a385421efe315843e2dfd62a0d55376d243a11f509de512dd031635a420"' : 'data-bs-target="#xs-injectables-links-module-UserModule-cb5ff7b6550e3c3baecd5f965d2407027adb24a3af2955cc5738a959d3b7c7c71c184a385421efe315843e2dfd62a0d55376d243a11f509de512dd031635a420"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-cb5ff7b6550e3c3baecd5f965d2407027adb24a3af2955cc5738a959d3b7c7c71c184a385421efe315843e2dfd62a0d55376d243a11f509de512dd031635a420"' :
                                        'id="xs-injectables-links-module-UserModule-cb5ff7b6550e3c3baecd5f965d2407027adb24a3af2955cc5738a959d3b7c7c71c184a385421efe315843e2dfd62a0d55376d243a11f509de512dd031635a420"' }>
                                        <li class="link">
                                            <a href="injectables/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthDto.html" data-type="entity-link" >AuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthInput.html" data-type="entity-link" >AuthInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthPayload.html" data-type="entity-link" >AuthPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthResolver.html" data-type="entity-link" >AuthResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthResolver-1.html" data-type="entity-link" >AuthResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBookDto.html" data-type="entity-link" >CreateBookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditUserDto.html" data-type="entity-link" >EditUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GraphqlContext.html" data-type="entity-link" >GraphqlContext</a>
                            </li>
                            <li class="link">
                                <a href="classes/IMutation.html" data-type="entity-link" >IMutation</a>
                            </li>
                            <li class="link">
                                <a href="classes/IQuery.html" data-type="entity-link" >IQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtGuard.html" data-type="entity-link" >JwtGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrismaClientExceptionFilter.html" data-type="entity-link" >PrismaClientExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequestWithUser.html" data-type="entity-link" >RequestWithUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServiceStatus.html" data-type="entity-link" >ServiceStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpPayload.html" data-type="entity-link" >SignUpPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBookDto.html" data-type="entity-link" >UpdateBookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOrderDto.html" data-type="entity-link" >UpdateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Flags.html" data-type="entity-link" >Flags</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});