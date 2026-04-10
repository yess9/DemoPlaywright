Feature: Login

  @login
  Scenario: Login básico
    Given ingreso a la página
    When hago login con usuario "standard_user" y password "secret_sauce"
    Then debería ver el dashboard
  