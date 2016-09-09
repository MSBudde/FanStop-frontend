angular.module('fanStop')
  .controller('signInController', signInController);

signInController.$inject = ['$log', 'authService', 'userService', '$state'];

function signInController($log, authService, userService, $state) {
  var self = this;
  self.authService = authService;

  self.signUp = {
    email: '',
    username: '',
    password: '',
    password_confirmation: ''
  }

  self.submitSignUp = submitSignUp;

  self.logIn = {
    username: '',
    password: ''
  }

  self.submitLogIn = submitLogIn;
  self.conflict = false;

  function submitSignUp() {
    userService
      .create(self.signUp).then(function(res) {
        return authService.logIn(self.signUp)
      }).then(function(decodedToken) {
        $log.info('Logged in', decodedToken);
        $state.go('welcome');
      },
      function(err) {
        if (err.status === 409) self.conflict = true;
        $log.info('Error:', err)
        
      }
    );
  }

  function submitLogIn() {
    authService
      .logIn(self.logIn).then(function(decodedToken) {
        $log.info('logged in', decodedToken);
        $state.go('welcome')
      },
      function(err) {
        $log.info('Error:', err)
      }
    )
  }
  $log.info('signInController loaded!')
}
