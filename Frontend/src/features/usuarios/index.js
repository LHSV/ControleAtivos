import './usuarios.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './usuarios.routes';
import UsuariosController from './usuarios.controller';
import UsuariosService from './usuarios.service';

export default angular.module('app.usuarios', [uirouter])
    .config(routing)
    .controller('UsuariosController', UsuariosController)
    .service('UsuariosService', UsuariosService)
    .name;
