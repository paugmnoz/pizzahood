    d3.csv("./assets/csv/pizzahood.csv", function(d) {
        return {
            nombre: d.Nombre,
            pimenton: parseFloat (d.Pimentón),
            cebolla: parseFloat (d.Cebolla),
            champ: parseFloat (d.Champiñon),
            tomate: parseFloat (d.Tomate),
            queso: parseFloat (d.Queso),
            piña: parseFloat (d.Piña),
            maduro: parseFloat (d.Maduro),
            maiz: parseFloat (d.Maiz),
            jamon: parseFloat (d.Jamón),
            pollo: parseFloat (d.Pollo),
            tocineta: parseFloat (d.Tocineta),
            aceituna: parseFloat (d.Aceitunas),
            anchoas: parseFloat (d.Anchoas),
            pepperoni: parseFloat (d.Pepperoni),
            salami: parseFloat (d.Salami),
            jalapeños: parseFloat (d.Jalapeños),
            jserrano: parseFloat (d.JSerrano),
            chorizo: parseFloat (d.Chorizo),
            albahaca: parseFloat (d.Albahaca),
            carne: parseFloat (d.Carne),
            oregano: parseFloat (d.Orégano),
            rugula: parseFloat (d.Rugula),
            cabano: parseFloat (d.Cabano),
            berenjena: parseFloat (d.Berenjena),
            mariscos: parseFloat (d.Mariscos)

        }
           
       
    },
    function (error, pizzaCSV) {
        console.log(pizzaCSV);
        let usuario = 0;

        pizzaCSV.forEach(u => {
           u.pimenton 
        });
       
    });