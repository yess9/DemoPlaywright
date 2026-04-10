Feature: Compra de producto mother elephant en Demo Site Guru99 
  Como un cliente de Demo Site Guru99,
  Quiero poder seleccionar, agregar productos al carrito y completar una compra,
  Para poder adquirir el producto que necesito de manera facil y segura.

  Background: Navegar al sitio de Demo Site Guru99
    Given ingreso a la página de Elephant 

  @completarcompra 
  Scenario: Completar el proceso de compra
    When se abre y se cierra el pop-up de cookies
    And capturo los datos de la tarjeta
    And regreso al home
    And agrego un producto al carrito de compras
    And doy click en comprar
    And ingreso los datos de la tarjeta
    Then visualizo un mensaje de compra exitosa y numero de orden
    And regreso al home de Elephant
    And doy click en estado de compra
    And ingreso los datos de  la tarjeta para comprar
    And puedo validar los datos de la tarjeta y el estado de la compra 