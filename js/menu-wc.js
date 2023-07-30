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
                                            'data-bs-target="#controllers-links-module-AppModule-00fcbaeb5395cb05b66ff6c627777f0ed191439b2351185bc8e9e695f58da461f3b7e43e4527329f8c28227058f9f3998669869e2aca0b8f5d7be2af0965d6b8"' : 'data-bs-target="#xs-controllers-links-module-AppModule-00fcbaeb5395cb05b66ff6c627777f0ed191439b2351185bc8e9e695f58da461f3b7e43e4527329f8c28227058f9f3998669869e2aca0b8f5d7be2af0965d6b8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-00fcbaeb5395cb05b66ff6c627777f0ed191439b2351185bc8e9e695f58da461f3b7e43e4527329f8c28227058f9f3998669869e2aca0b8f5d7be2af0965d6b8"' :
                                            'id="xs-controllers-links-module-AppModule-00fcbaeb5395cb05b66ff6c627777f0ed191439b2351185bc8e9e695f58da461f3b7e43e4527329f8c28227058f9f3998669869e2aca0b8f5d7be2af0965d6b8"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-00fcbaeb5395cb05b66ff6c627777f0ed191439b2351185bc8e9e695f58da461f3b7e43e4527329f8c28227058f9f3998669869e2aca0b8f5d7be2af0965d6b8"' : 'data-bs-target="#xs-injectables-links-module-AppModule-00fcbaeb5395cb05b66ff6c627777f0ed191439b2351185bc8e9e695f58da461f3b7e43e4527329f8c28227058f9f3998669869e2aca0b8f5d7be2af0965d6b8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-00fcbaeb5395cb05b66ff6c627777f0ed191439b2351185bc8e9e695f58da461f3b7e43e4527329f8c28227058f9f3998669869e2aca0b8f5d7be2af0965d6b8"' :
                                        'id="xs-injectables-links-module-AppModule-00fcbaeb5395cb05b66ff6c627777f0ed191439b2351185bc8e9e695f58da461f3b7e43e4527329f8c28227058f9f3998669869e2aca0b8f5d7be2af0965d6b8"' }>
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
                                            'data-bs-target="#controllers-links-module-UserModule-658fa9d9999a1e33304fee646a338f1ad7584464b8763811f08a32325699544692a50786a8cc68fe62153898b9a5e3f18e1b1eb01dae6cf967c2616c7d4f4cdf"' : 'data-bs-target="#xs-controllers-links-module-UserModule-658fa9d9999a1e33304fee646a338f1ad7584464b8763811f08a32325699544692a50786a8cc68fe62153898b9a5e3f18e1b1eb01dae6cf967c2616c7d4f4cdf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-658fa9d9999a1e33304fee646a338f1ad7584464b8763811f08a32325699544692a50786a8cc68fe62153898b9a5e3f18e1b1eb01dae6cf967c2616c7d4f4cdf"' :
                                            'id="xs-controllers-links-module-UserModule-658fa9d9999a1e33304fee646a338f1ad7584464b8763811f08a32325699544692a50786a8cc68fe62153898b9a5e3f18e1b1eb01dae6cf967c2616c7d4f4cdf"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-658fa9d9999a1e33304fee646a338f1ad7584464b8763811f08a32325699544692a50786a8cc68fe62153898b9a5e3f18e1b1eb01dae6cf967c2616c7d4f4cdf"' : 'data-bs-target="#xs-injectables-links-module-UserModule-658fa9d9999a1e33304fee646a338f1ad7584464b8763811f08a32325699544692a50786a8cc68fe62153898b9a5e3f18e1b1eb01dae6cf967c2616c7d4f4cdf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-658fa9d9999a1e33304fee646a338f1ad7584464b8763811f08a32325699544692a50786a8cc68fe62153898b9a5e3f18e1b1eb01dae6cf967c2616c7d4f4cdf"' :
                                        'id="xs-injectables-links-module-UserModule-658fa9d9999a1e33304fee646a338f1ad7584464b8763811f08a32325699544692a50786a8cc68fe62153898b9a5e3f18e1b1eb01dae6cf967c2616c7d4f4cdf"' }>
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
                                <a href="classes/EditUserDto.html" data-type="entity-link" >EditUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GraphqlContext.html" data-type="entity-link" >GraphqlContext</a>
                            </li>
                            <li class="link">
                                <a href="classes/IMutation.html" data-type="entity-link" >IMutation</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtGuard.html" data-type="entity-link" >JwtGuard</a>
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