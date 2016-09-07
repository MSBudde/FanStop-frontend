angular.module('fanStop')
    .controller('NavbarCtrl', NavbarCtrl);

  NavbarCtrl.$inject = ["$log", "authService"];

  function NavbarCtrl($log, authService) {
    var self = this;

    self.authService = authService;

    $log.info("NavbarController loaded!");
}
