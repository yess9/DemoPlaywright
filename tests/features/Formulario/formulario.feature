Feature: Formulario de Novus Technology
  Dado que soy un alumno de Novus Technology
  Cuando ingreso los datos en el formulario
  Entonces visualizo un mensaje con el nombre y el apellido


  @formulario
  Scenario: Cuando ingreso todos los campos del formulario
    Given ingreso a la página de Novus Technology
    And mis datos personales con el nombre "Yessica" y el apellido "Huillca Lloclle"
    And ingreso mi correo electrónico "yhuillcall@gmail.com" y mi número de teléfono "1234567890"
    And selecciono el pasatiempo
    And selecciono el género
    And selecciono el lugar departamento "LIMA" y la ciudad "LIMA"
    And selecciono un comando
    And cargo un documento
    Then visualizo un mensaje con el nombre y el apellido

#And doy click en enviar
#Then visualizo un modal con el nombre 
#And el apellido