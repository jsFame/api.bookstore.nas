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
                                            'data-bs-target="#controllers-links-module-AppModule-f6c87f2ea2c98d7cafcfa049edf5f66fa0bf95a2ecc4128916ccf4e0eca8b708631a045eb883247d1ccfe07445ae7419d3f8bd6f9a8a1418bbca7441dc6359aa"' : 'data-bs-target="#xs-controllers-links-module-AppModule-f6c87f2ea2c98d7cafcfa049edf5f66fa0bf95a2ecc4128916ccf4e0eca8b708631a045eb883247d1ccfe07445ae7419d3f8bd6f9a8a1418bbca7441dc6359aa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-f6c87f2ea2c98d7cafcfa049edf5f66fa0bf95a2ecc4128916ccf4e0eca8b708631a045eb883247d1ccfe07445ae7419d3f8bd6f9a8a1418bbca7441dc6359aa"' :
                                            'id="xs-controllers-links-module-AppModule-f6c87f2ea2c98d7cafcfa049edf5f66fa0bf95a2ecc4128916ccf4e0eca8b708631a045eb883247d1ccfe07445ae7419d3f8bd6f9a8a1418bbca7441dc6359aa"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-f6c87f2ea2c98d7cafcfa049edf5f66fa0bf95a2ecc4128916ccf4e0eca8b708631a045eb883247d1ccfe07445ae7419d3f8bd6f9a8a1418bbca7441dc6359aa"' : 'data-bs-target="#xs-injectables-links-module-AppModule-f6c87f2ea2c98d7cafcfa049edf5f66fa0bf95a2ecc4128916ccf4e0eca8b708631a045eb883247d1ccfe07445ae7419d3f8bd6f9a8a1418bbca7441dc6359aa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-f6c87f2ea2c98d7cafcfa049edf5f66fa0bf95a2ecc4128916ccf4e0eca8b708631a045eb883247d1ccfe07445ae7419d3f8bd6f9a8a1418bbca7441dc6359aa"' :
                                        'id="xs-injectables-links-module-AppModule-f6c87f2ea2c98d7cafcfa049edf5f66fa0bf95a2ecc4128916ccf4e0eca8b708631a045eb883247d1ccfe07445ae7419d3f8bd6f9a8a1418bbca7441dc6359aa"' }>
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
                                        'data-bs-target="#injectables-links-module-PrismaModule-bb94960753a65408e6597d14b3963cafde4029ef88de7c33dce481e812f2bdf4358b1e6f4db055ddb609635e27161e25994dbe19ef4ac56ff85794ceb92ad391"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-bb94960753a65408e6597d14b3963cafde4029ef88de7c33dce481e812f2bdf4358b1e6f4db055ddb609635e27161e25994dbe19ef4ac56ff85794ceb92ad391"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-bb94960753a65408e6597d14b3963cafde4029ef88de7c33dce481e812f2bdf4358b1e6f4db055ddb609635e27161e25994dbe19ef4ac56ff85794ceb92ad391"' :
                                        'id="xs-injectables-links-module-PrismaModule-bb94960753a65408e6597d14b3963cafde4029ef88de7c33dce481e812f2bdf4358b1e6f4db055ddb609635e27161e25994dbe19ef4ac56ff85794ceb92ad391"' }>
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
                                            'data-bs-target="#controllers-links-module-UserModule-35583808aa9e2492f1e133533f4a61590989e50908cc5740f56f9ccf9508670d51d3d3b5b25f908da7a59187a320b7c287697aadf5396cbdf8d6300ca860feab"' : 'data-bs-target="#xs-controllers-links-module-UserModule-35583808aa9e2492f1e133533f4a61590989e50908cc5740f56f9ccf9508670d51d3d3b5b25f908da7a59187a320b7c287697aadf5396cbdf8d6300ca860feab"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-35583808aa9e2492f1e133533f4a61590989e50908cc5740f56f9ccf9508670d51d3d3b5b25f908da7a59187a320b7c287697aadf5396cbdf8d6300ca860feab"' :
                                            'id="xs-controllers-links-module-UserModule-35583808aa9e2492f1e133533f4a61590989e50908cc5740f56f9ccf9508670d51d3d3b5b25f908da7a59187a320b7c287697aadf5396cbdf8d6300ca860feab"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-35583808aa9e2492f1e133533f4a61590989e50908cc5740f56f9ccf9508670d51d3d3b5b25f908da7a59187a320b7c287697aadf5396cbdf8d6300ca860feab"' : 'data-bs-target="#xs-injectables-links-module-UserModule-35583808aa9e2492f1e133533f4a61590989e50908cc5740f56f9ccf9508670d51d3d3b5b25f908da7a59187a320b7c287697aadf5396cbdf8d6300ca860feab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-35583808aa9e2492f1e133533f4a61590989e50908cc5740f56f9ccf9508670d51d3d3b5b25f908da7a59187a320b7c287697aadf5396cbdf8d6300ca860feab"' :
                                        'id="xs-injectables-links-module-UserModule-35583808aa9e2492f1e133533f4a61590989e50908cc5740f56f9ccf9508670d51d3d3b5b25f908da7a59187a320b7c287697aadf5396cbdf8d6300ca860feab"' }>
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