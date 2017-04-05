var celdasSeleccionadasRejillaC = [];

function mostrarPanelRejillaC()
{
	//crearPanelAfin();
	$("#panelInteractivo-CifradoRejillaC").slideToggle(1000);
	$("#contenidoPagina").slideToggle(1000);	
}

function cerrarPanelRejillaC()
{
	$("#panelInteractivo-CifradoRejillaC").slideToggle(1000);
	$("#contenidoPagina").slideToggle(1000);
	limpiaPanelRejillaC();
}

function limpiaPanelRejillaC()
{
	$("#informacionRejilla1C").empty();
	$("#informacionRejilla1C").slideToggle();
	$("#tablaTextoPlanoRejillaC").slideToggle();
	$("#f1").empty();
	$("#f2").empty();
	$("#f3").empty();
	$("#f4").empty();
	$("#f5").empty();
	$("#f6").empty();
	$("#textoCifradoRejillaC3").empty();
}

function limpiaPanelRejillaC2()
{
	$("#informacionRejilla1D").empty();
	$("#informacionRejilla1D").slideToggle();
	/*$("#tablaTextoCifradoRejillaD").slideToggle();
	$("#fDR1").empty();
	$("#fDR2").empty();
	$("#fDR3").empty();
	$("#fDR4").empty();
	$("#fDR5").empty();
	$("#fDR6").empty();*/
}

function limpiarCeldas()
{
	celdasSeleccionadasRejillaC= [];
}

function seleccionarCuadrante1Valor1(elem)
{	
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{		
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor1")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor1")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor1"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante1Valor1");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante1Valor1");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{		
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor1")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante2Valor1(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor1")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor1")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor1"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante2Valor1");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante2Valor1");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor1")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}
	
function seleccionarCuadrante3Valor1(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor1")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor1")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor1"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante3Valor1");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante3Valor1");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor1")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}	

function seleccionarCuadrante4Valor1(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor1")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor1")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor1"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante4Valor1");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante4Valor1");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor1")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante1Valor2(elem)
{	
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{		
		if(celdasSeleccionadasRejillaC.length>0)
		{			
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor2")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor2")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor2"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{					
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante1Valor2");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante1Valor2");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor2")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante2Valor2(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor2")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor2")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor2"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante2Valor2");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante2Valor2");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor2")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}
	
function seleccionarCuadrante3Valor2(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor2")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor2")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor2"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante3Valor2");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante3Valor2");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor2")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}	

function seleccionarCuadrante4Valor2(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor2")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor2")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor2"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante4Valor2");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante4Valor2");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor2")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante1Valor3(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor3")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor3")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor3"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante1Valor3");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante1Valor3");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor3")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante2Valor3(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor3")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor3")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor3"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante2Valor3");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante2Valor3");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor3")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}
	
function seleccionarCuadrante3Valor3(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor3")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor3")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor3"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante3Valor3");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante3Valor3");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor3")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}	

function seleccionarCuadrante4Valor3(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor3")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor3")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor3"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante4Valor3");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante4Valor3");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor3")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante1Valor4(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor4")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor4")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor4"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante1Valor4");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante1Valor4");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor4")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante2Valor4(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor4")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor4")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor4"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante2Valor4");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante2Valor4");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor4")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}
	
function seleccionarCuadrante3Valor4(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor4")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor4")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor4"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante3Valor4");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante3Valor4");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor4")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}	

function seleccionarCuadrante4Valor4(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor4")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor4")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor4"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante4Valor4");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante4Valor4");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor4")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante1Valor5(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor5")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor5")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor5"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante1Valor5");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante1Valor5");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor5")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante2Valor5(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor5")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor5")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor5"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante2Valor5");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante2Valor5");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor5")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}
	
function seleccionarCuadrante3Valor5(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor5")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor5")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor5"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante3Valor5");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante3Valor5");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor5")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}	

function seleccionarCuadrante4Valor5(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor5")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor5")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor5"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante4Valor5");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante4Valor5");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor5")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante1Valor6(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor6")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor6")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor6"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante1Valor6");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante1Valor6");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor6")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante2Valor6(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor6")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor6")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor6"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante2Valor6");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante2Valor6");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor6")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}
	
function seleccionarCuadrante3Valor6(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor6")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor6")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor6"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante3Valor6");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante3Valor6");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor6")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}	

function seleccionarCuadrante4Valor6(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor6")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor6")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor6"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante4Valor6");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante4Valor6");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor6")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante1Valor7(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor7")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor7")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor7"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante1Valor7");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante1Valor7");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor7")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante2Valor7(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor7")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor7")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor7"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante2Valor7");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante2Valor7");
			i= celdasSeleccionadasRejillaC.length;
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor7")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}
	
function seleccionarCuadrante3Valor7(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor7")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor7")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor7"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante3Valor7");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante3Valor7");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor7")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}	

function seleccionarCuadrante4Valor7(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor7")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor7")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor7"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante4Valor7");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante4Valor7");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor7")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante1Valor8(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor8")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor8")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor8"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante1Valor8");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante1Valor8");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor8")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante2Valor8(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor8")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor8")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor8"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante2Valor8");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante2Valor8");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor8")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}
	
function seleccionarCuadrante3Valor8(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor8")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor8")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor8"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante3Valor8");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante3Valor8");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor8")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}	

function seleccionarCuadrante4Valor8(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor8")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor8")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor8"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante4Valor8");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante4Valor8");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor8")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante1Valor9(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor9")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor9")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor9"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante1Valor9");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante1Valor9");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor9")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

function seleccionarCuadrante2Valor9(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor9")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor9")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor9"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante2Valor9");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante2Valor9");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor9")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}
	
function seleccionarCuadrante3Valor9(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor9")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor9")||celdasSeleccionadasRejillaC[i].includes("Cuadrante4Valor9"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante3Valor9");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante3Valor9");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor9")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}	

function seleccionarCuadrante4Valor9(elem)
{
	if(elem.style.backgroundColor != "rgb(253, 253, 150)")
	{
		if(celdasSeleccionadasRejillaC.length>0)
		{
			for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
			{
				if(celdasSeleccionadasRejillaC[i].includes("Cuadrante1Valor9")||celdasSeleccionadasRejillaC[i].includes("Cuadrante2Valor9")||celdasSeleccionadasRejillaC[i].includes("Cuadrante3Valor9"))
				{
					//NO AGREGA NADA MUESTRA ERROR
					i= celdasSeleccionadasRejillaC.length;
				}
				else if(i+1==celdasSeleccionadasRejillaC.length)
				{
					elem.style.backgroundColor = "#FDFD96";
					celdasSeleccionadasRejillaC.push("Cuadrante4Valor9");
					i= celdasSeleccionadasRejillaC.length;
					//console.log(celdasSeleccionadasRejillaC.length);
				}
			}
				
		}
		else
		{
			elem.style.backgroundColor = "#FDFD96";
			celdasSeleccionadasRejillaC.push("Cuadrante4Valor9");
			//console.log(celdasSeleccionadasRejillaC.length);
		}							
	}
	else
	{
		for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
		{
			if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor9")
			{
				celdasSeleccionadasRejillaC.splice(i, 1);
				elem.style.backgroundColor = "transparent";
				i= celdasSeleccionadasRejillaC.length;
				//console.log(celdasSeleccionadasRejillaC.length);
			}
		}			
	}
}

async function cifrarRejillaC()
{
	$("#btn-cifrarRejillaC").attr("disabled","disabled");
	$("#btn-cifrarRejillaC").html('<i class="fa fa-spinner fa-spin"></i> Cifrando...');
	
	$("#textoCifradoRejillaC2").val("");

	$("#informacionRejilla1C").append("Ahora dibujamos otra tabla igual de 6x6, donde escribiremos el mensaje claro de la siguiente forma: (Si no llena toda la tabla, los cuadros faltantes se llenan con letras al azar)");
	$("#informacionRejilla1C").slideToggle(800);
	posicion = $("#informacionRejilla1C").offset().top;
	$("html, body").animate({scrollTop: posicion}, 1000);
	await sleep(4200);	
	
	$("#tablaTextoPlanoRejillaC").slideToggle(800);
	posicion = $("#tablaTextoPlanoRejillaC").offset().top;
	$("html, body").animate({scrollTop: posicion}, 1000);
	await sleep(800);
	
	var textoPlano = ($("#textoPlanoRejillaC").val().toUpperCase()).split("");
	var posTextoPlano= 0;
	var numeroCelda= 1;
		
	for(var i=0; i<6; i++)
	{		
		if(posTextoPlano<textoPlano.length)
		{
			if(textoPlano[posTextoPlano]!=' ')
			{
				$("#f1").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+textoPlano[posTextoPlano]+'</td>');
				posTextoPlano++;
			}
			else
			{								
				while(textoPlano[posTextoPlano]==' ')
				{
					posTextoPlano++;
				}
				
				$("#f1").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+textoPlano[posTextoPlano]+'</td>');
				posTextoPlano++;
			}
		}
		else
		{
			var aleatorio = Math.round((Math.random()*25)+65);
			$("#f1").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+String.fromCharCode(aleatorio)+'</td>');
		}		
		
		numeroCelda++;
		await sleep(100);
	}
	
	for(var i=0; i<6; i++)
	{			
		if(posTextoPlano<textoPlano.length)
		{
			if(textoPlano[posTextoPlano]!=' ')
			{
				$("#f2").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+textoPlano[posTextoPlano]+'</td>');
				posTextoPlano++;
			}
			else
			{								
				while(textoPlano[posTextoPlano]==' ')
				{
					posTextoPlano++;
				}
				
				$("#f2").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+textoPlano[posTextoPlano]+'</td>');
				posTextoPlano++;
			}
		}
		else
		{
			var aleatorio = Math.round((Math.random()*25)+65);
			$("#f2").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+String.fromCharCode(aleatorio)+'</td>');
		}
		
		numeroCelda++;
		await sleep(100);
	}
	
	for(var i=0; i<6; i++)
	{			
		if(posTextoPlano<textoPlano.length)
		{
			if(textoPlano[posTextoPlano]!=' ')
			{
				$("#f3").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+textoPlano[posTextoPlano]+'</td>');
				posTextoPlano++;
			}
			else
			{								
				while(textoPlano[posTextoPlano]==' ')
				{
					posTextoPlano++;
				}
				
				$("#f3").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+textoPlano[posTextoPlano]+'</td>');
				posTextoPlano++;
			}
		}
		else
		{
			var aleatorio = Math.round((Math.random()*25)+65);
			$("#f3").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+String.fromCharCode(aleatorio)+'</td>');
		}
		
		numeroCelda++;
		await sleep(100);
	}
	
	for(var i=0; i<6; i++)
	{			
		if(posTextoPlano<textoPlano.length)
		{
			if(textoPlano[posTextoPlano]!=' ')
			{
				$("#f4").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+textoPlano[posTextoPlano]+'</td>');
				posTextoPlano++;
			}
			else
			{								
				while(textoPlano[posTextoPlano]==' ')
				{
					posTextoPlano++;
				}
				
				$("#f4").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+textoPlano[posTextoPlano]+'</td>');
				posTextoPlano++;
			}
		}
		else
		{
			var aleatorio = Math.round((Math.random()*25)+65);
			$("#f4").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+String.fromCharCode(aleatorio)+'</td>');
		}
		
		numeroCelda++;
		await sleep(100);
	}
	
	for(var i=0; i<6; i++)
	{			
		if(posTextoPlano<textoPlano.length)
		{
			if(textoPlano[posTextoPlano]!=' ')
			{
				$("#f5").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+textoPlano[posTextoPlano]+'</td>');
				posTextoPlano++;
			}
			else
			{								
				while(textoPlano[posTextoPlano]==' ')
				{
					posTextoPlano++;
				}
				
				$("#f5").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+textoPlano[posTextoPlano]+'</td>');
				posTextoPlano++;
			}
		}
		else
		{
			var aleatorio = Math.round((Math.random()*25)+65);
			$("#f5").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+String.fromCharCode(aleatorio)+'</td>');
		}
		
		numeroCelda++;
		await sleep(100);
	}
	
	for(var i=0; i<6; i++)
	{			
		if(posTextoPlano<textoPlano.length)
		{
			if(textoPlano[posTextoPlano]!=' ')
			{
				$("#f6").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+textoPlano[posTextoPlano]+'</td>');
				posTextoPlano++;
			}
			else
			{								
				while(textoPlano[posTextoPlano]==' ')
				{
					posTextoPlano++;
				}
				
				$("#f6").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+textoPlano[posTextoPlano]+'</td>');
				posTextoPlano++;
			}
		}
		else
		{
			var aleatorio = Math.round((Math.random()*25)+65);
			$("#f6").append('<td id="celdaTextoPlanoRejillaC'+numeroCelda+'">'+String.fromCharCode(aleatorio)+'</td>');
		}
		
		numeroCelda++;
		await sleep(100);
	}
	
	await sleep(1000);
	
	$("#informacionRejilla1C").slideToggle(800);
	$("#informacionRejilla1C").empty();
	await sleep(900);
	$("#informacionRejilla1C").append("Ahora colocamos la rejilla con los huecos seleccionados sobre el mensaje claro:");
	$("#informacionRejilla1C").slideToggle(800);
	posicion = $("#informacionRejilla1C").offset().top;
	$("html, body").animate({scrollTop: posicion}, 1000);
	await sleep(1800);
	
	for(var i=1; i<=36; i++)
	{
		$("#celdaTextoPlanoRejillaC"+i).css("backgroundColor", "black");
		$("#celdaTextoPlanoRejillaC"+i).css("color", "black");
	}	
	
	for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
	{
		if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor1")
		{
			$("#celdaTextoPlanoRejillaC1").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor1")
		{
			$("#celdaTextoPlanoRejillaC6").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor1")
		{
			$("#celdaTextoPlanoRejillaC36").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor1")
		{
			$("#celdaTextoPlanoRejillaC31").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor2")
		{
			$("#celdaTextoPlanoRejillaC2").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor2")
		{
			$("#celdaTextoPlanoRejillaC12").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor2")
		{
			$("#celdaTextoPlanoRejillaC35").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor2")
		{
			$("#celdaTextoPlanoRejillaC25").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor3")
		{
			$("#celdaTextoPlanoRejillaC3").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor3")
		{
			$("#celdaTextoPlanoRejillaC18").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor3")
		{
			$("#celdaTextoPlanoRejillaC34").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor3")
		{
			$("#celdaTextoPlanoRejillaC19").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor4")
		{
			$("#celdaTextoPlanoRejillaC7").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor4")
		{
			$("#celdaTextoPlanoRejillaC5").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor4")
		{
			$("#celdaTextoPlanoRejillaC30").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor4")
		{
			$("#celdaTextoPlanoRejillaC32").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor5")
		{
			$("#celdaTextoPlanoRejillaC8").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor5")
		{
			$("#celdaTextoPlanoRejillaC11").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor5")
		{
			$("#celdaTextoPlanoRejillaC29").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor5")
		{
			$("#celdaTextoPlanoRejillaC26").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor6")
		{
			$("#celdaTextoPlanoRejillaC9").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor6")
		{
			$("#celdaTextoPlanoRejillaC17").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor6")
		{
			$("#celdaTextoPlanoRejillaC28").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor6")
		{
			$("#celdaTextoPlanoRejillaC20").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor7")
		{
			$("#celdaTextoPlanoRejillaC13").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor7")
		{
			$("#celdaTextoPlanoRejillaC4").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor7")
		{
			$("#celdaTextoPlanoRejillaC24").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor7")
		{
			$("#celdaTextoPlanoRejillaC33").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor8")
		{
			$("#celdaTextoPlanoRejillaC14").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor8")
		{
			$("#celdaTextoPlanoRejillaC10").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor8")
		{
			$("#celdaTextoPlanoRejillaC23").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor8")
		{
			$("#celdaTextoPlanoRejillaC27").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor9")
		{
			$("#celdaTextoPlanoRejillaC15").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor9")
		{
			$("#celdaTextoPlanoRejillaC16").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor9")
		{
			$("#celdaTextoPlanoRejillaC22").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor9")
		{
			$("#celdaTextoPlanoRejillaC21").css("backgroundColor", "#FDFD96");
		}
	}
	
	$("#informacionRejilla1C").slideToggle(800);
	$("#informacionRejilla1C").empty();
	await sleep(900);
	$("#informacionRejilla1C").append("Simulando la idea de la rejilla, las letras visibles (por los huecos) las anotamos como nuestro criptograma:");
	$("#informacionRejilla1C").slideToggle(800);
	posicion = $("#informacionRejilla1C").offset().top;
	$("html, body").animate({scrollTop: posicion}, 1000);
	await sleep(2200);	
	
	var cifrado= [];
	var cadenaCifrado;
	var posArrayTextoCifrado= 0;

	for(var i=1; i<=36; i++)
	{			
		if($("#celdaTextoPlanoRejillaC"+i).css('backgroundColor')=="rgb(253, 253, 150)")
		{			
			$("#celdaTextoPlanoRejillaC"+i).css("backgroundColor", "#77DD77");			
						
			cifrado[posArrayTextoCifrado] = $("#celdaTextoPlanoRejillaC"+i).text();
			
			cadenaCifrado = cifrado.join("");					
			
			$("#textoCifradoRejillaC3").append('<label id="abcCifradoRejilla'+posArrayTextoCifrado+'C" class="circulo">'+cifrado[posArrayTextoCifrado]+'</label>');
			$("#abcCifradoRejilla"+posArrayTextoCifrado+"C").css("backgroundColor", "#77DD77");
			await sleep(1750);
			
			$("#celdaTextoPlanoRejillaC"+i).css("backgroundColor", "#FDFD96");	
			$("#abcCifradoRejilla"+posArrayTextoCifrado+"C").css("backgroundColor", "transparent");
			posArrayTextoCifrado++;
		}
		else
		{
			$("#celdaTextoPlanoRejillaC"+i).css("color", "#FF6961");
			$("#celdaTextoPlanoRejillaC"+i).css("backgroundColor", "#FF6961");
			await sleep(75);
			$("#celdaTextoPlanoRejillaC"+i).css("color", "black");
			$("#celdaTextoPlanoRejillaC"+i).css("backgroundColor", "black");
			await sleep(75);
		}
	}		
	
	var auxCeldasSeleccionadasRejillaC = celdasSeleccionadasRejillaC.slice();
	var proxElementos= [];
	
	for(var i=0; i<3; i++)
	{
		$("#informacionRejilla1C").slideToggle(800);
		$("#informacionRejilla1C").empty();
		await sleep(900);
		$("#informacionRejilla1C").append("Giramos 90 grados nuestra rejilla hacia la derecha...");
		$("#informacionRejilla1C").slideToggle(800);
		await sleep(1750);
		
		for(var j=1; j<=36; j++)
		{
			$("#celdaTextoPlanoRejillaC"+j).css("backgroundColor", "black");
			$("#celdaTextoPlanoRejillaC"+j).css("color", "black");
		}			
		
		for(var j=0; j<auxCeldasSeleccionadasRejillaC.length; j++)
		{
			if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor1"||auxCeldasSeleccionadasRejillaC[j]=="C1")
			{
				proxElementos.push("C6");
				$("#celdaTextoPlanoRejillaC6").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor1"||auxCeldasSeleccionadasRejillaC[j]=="C6")
			{
				proxElementos.push("C36");
				$("#celdaTextoPlanoRejillaC36").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor1"||auxCeldasSeleccionadasRejillaC[j]=="C36")
			{
				proxElementos.push("C31");
				$("#celdaTextoPlanoRejillaC31").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor1"||auxCeldasSeleccionadasRejillaC[j]=="C31")
			{
				proxElementos.push("C1");
				$("#celdaTextoPlanoRejillaC1").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor2"||auxCeldasSeleccionadasRejillaC[j]=="C2")
			{
				proxElementos.push("C12");
				$("#celdaTextoPlanoRejillaC12").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor2"||auxCeldasSeleccionadasRejillaC[j]=="C12")
			{
				proxElementos.push("C35");
				$("#celdaTextoPlanoRejillaC35").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor2"||auxCeldasSeleccionadasRejillaC[j]=="C35")
			{
				proxElementos.push("C25");
				$("#celdaTextoPlanoRejillaC25").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor2"||auxCeldasSeleccionadasRejillaC[j]=="C25")
			{
				proxElementos.push("C2");
				$("#celdaTextoPlanoRejillaC2").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor3"||auxCeldasSeleccionadasRejillaC[j]=="C3")
			{
				proxElementos.push("C18");
				$("#celdaTextoPlanoRejillaC18").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor3"||auxCeldasSeleccionadasRejillaC[j]=="C18")
			{
				proxElementos.push("C34");
				$("#celdaTextoPlanoRejillaC34").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor3"||auxCeldasSeleccionadasRejillaC[j]=="C34")
			{
				proxElementos.push("C19");
				$("#celdaTextoPlanoRejillaC19").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor3"||auxCeldasSeleccionadasRejillaC[j]=="C19")
			{
				proxElementos.push("C3");
				$("#celdaTextoPlanoRejillaC3").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor4"||auxCeldasSeleccionadasRejillaC[j]=="C7")
			{
				proxElementos.push("C5");
				$("#celdaTextoPlanoRejillaC5").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor4"||auxCeldasSeleccionadasRejillaC[j]=="C5")
			{
				proxElementos.push("C30");
				$("#celdaTextoPlanoRejillaC30").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor4"||auxCeldasSeleccionadasRejillaC[j]=="C30")
			{
				proxElementos.push("C32");
				$("#celdaTextoPlanoRejillaC32").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor4"||auxCeldasSeleccionadasRejillaC[j]=="C32")
			{
				proxElementos.push("C7");
				$("#celdaTextoPlanoRejillaC7").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor5"||auxCeldasSeleccionadasRejillaC[j]=="C8")
			{
				proxElementos.push("C11");
				$("#celdaTextoPlanoRejillaC11").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor5"||auxCeldasSeleccionadasRejillaC[j]=="C11")
			{
				proxElementos.push("C29");
				$("#celdaTextoPlanoRejillaC29").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor5"||auxCeldasSeleccionadasRejillaC[j]=="C29")
			{
				proxElementos.push("C26");
				$("#celdaTextoPlanoRejillaC26").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor5"||auxCeldasSeleccionadasRejillaC[j]=="C26")
			{
				proxElementos.push("C8");
				$("#celdaTextoPlanoRejillaC8").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor6"||auxCeldasSeleccionadasRejillaC[j]=="C9")
			{
				proxElementos.push("C17");
				$("#celdaTextoPlanoRejillaC17").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor6"||auxCeldasSeleccionadasRejillaC[j]=="C17")
			{
				proxElementos.push("C28");
				$("#celdaTextoPlanoRejillaC28").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor6"||auxCeldasSeleccionadasRejillaC[j]=="C28")
			{
				proxElementos.push("C20");
				$("#celdaTextoPlanoRejillaC20").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor6"||auxCeldasSeleccionadasRejillaC[j]=="C20")
			{
				proxElementos.push("C9");
				$("#celdaTextoPlanoRejillaC9").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor7"||auxCeldasSeleccionadasRejillaC[j]=="C13")
			{
				proxElementos.push("C4");
				$("#celdaTextoPlanoRejillaC4").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor7"||auxCeldasSeleccionadasRejillaC[j]=="C4")
			{
				proxElementos.push("C24");
				$("#celdaTextoPlanoRejillaC24").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor7"||auxCeldasSeleccionadasRejillaC[j]=="C24")
			{
				proxElementos.push("C33");
				$("#celdaTextoPlanoRejillaC33").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor7"||auxCeldasSeleccionadasRejillaC[j]=="C33")
			{
				proxElementos.push("C13");
				$("#celdaTextoPlanoRejillaC13").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor8"||auxCeldasSeleccionadasRejillaC[j]=="C14")
			{
				proxElementos.push("C10");
				$("#celdaTextoPlanoRejillaC10").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor8"||auxCeldasSeleccionadasRejillaC[j]=="C10")
			{
				proxElementos.push("C23");
				$("#celdaTextoPlanoRejillaC23").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor8"||auxCeldasSeleccionadasRejillaC[j]=="C23")
			{
				proxElementos.push("C27");
				$("#celdaTextoPlanoRejillaC27").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor8"||auxCeldasSeleccionadasRejillaC[j]=="C27")
			{
				proxElementos.push("C14");
				$("#celdaTextoPlanoRejillaC14").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor9"||auxCeldasSeleccionadasRejillaC[j]=="C15")
			{
				proxElementos.push("C16");
				$("#celdaTextoPlanoRejillaC16").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor9"||auxCeldasSeleccionadasRejillaC[j]=="C16")
			{
				proxElementos.push("C22");
				$("#celdaTextoPlanoRejillaC22").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor9"||auxCeldasSeleccionadasRejillaC[j]=="C22")
			{
				proxElementos.push("C21");
				$("#celdaTextoPlanoRejillaC21").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor9"||auxCeldasSeleccionadasRejillaC[j]=="C21")
			{
				proxElementos.push("C15");
				$("#celdaTextoPlanoRejillaC15").css("backgroundColor", "#FDFD96");
			}
		}
		
		auxCeldasSeleccionadasRejillaC = proxElementos.slice();		
		proxElementos= [];
		
		for(var j=1; j<=36; j++)
		{
			if($("#celdaTextoPlanoRejillaC"+j).css('backgroundColor')=="rgb(253, 253, 150)")
			{			
				$("#celdaTextoPlanoRejillaC"+j).css("backgroundColor", "#77DD77");				
							
				cifrado[posArrayTextoCifrado] = $("#celdaTextoPlanoRejillaC"+j).text();
				
				cadenaCifrado = cifrado.join("");				
				
				$("#textoCifradoRejillaC3").append('<label id="abcCifradoRejilla'+posArrayTextoCifrado+'C" class="circulo">'+cifrado[posArrayTextoCifrado]+'</label>');
				$("#abcCifradoRejilla"+posArrayTextoCifrado+"C").css("backgroundColor", "#77DD77");
				await sleep(1750);							
				
				$("#celdaTextoPlanoRejillaC"+j).css("backgroundColor", "#FDFD96");
				$("#abcCifradoRejilla"+posArrayTextoCifrado+"C").css("backgroundColor", "transparent");
				posArrayTextoCifrado++;
			}
			else
			{
				$("#celdaTextoPlanoRejillaC"+j).css("color", "#FF6961");
				$("#celdaTextoPlanoRejillaC"+j).css("backgroundColor", "#FF6961");
				await sleep(75);
				$("#celdaTextoPlanoRejillaC"+j).css("color", "black");
				$("#celdaTextoPlanoRejillaC"+j).css("backgroundColor", "black");
				await sleep(75);
			}
		}
	}
	
	$("#informacionRejilla1C").slideToggle(800);
	$("#informacionRejilla1C").empty();
	await sleep(900);	
	$("#informacionRejilla1C").append("Si volvemos a girar la rejilla 90 grados hacia la derecha llega a la posición inicial por lo que entonces el cifrado ha terminado.");
	$("#informacionRejilla1C").slideToggle(800);
	posicion = $("#informacionRejilla1C").offset().top;
	$("html, body").animate({scrollTop: posicion}, 1000);
	await sleep(3300);
	
	posicion = $("#textoCifradoRejillaC2").offset().top;
	$("html, body").animate({scrollTop: posicion}, 1000);
	
	toastr.options.timeOut = "1000";
	toastr['success']('Texto descifrado');
	$("#textoCifradoRejillaC2").val(cadenaCifrado);
	
	celdasSeleccionadasRejillaC= [];	
	
	limpiaPanelRejillaC();
	
	for(var i=1; i<=4; i++)
	{
		for(var j=1; j<=9; j++)
		{
			$("#Cuadrante"+i+"Valor"+j).css("backgroundColor", "transparent");
			$("#Cuadrante"+i+"Valor"+j).css("color", "black");
		}		
	}

	$("#btn-cifrarRejillaC").removeAttr("disabled");
	$("#btn-cifrarRejillaC").html('Cifrar');
}

async function descifrarRejilla()
{
	$("#btn-descifrarRejilla").attr("disabled","disabled");
	$("#btn-descifrarRejilla").html('<i class="fa fa-spinner fa-spin"></i> Descifrando...');
	
	$("#textoDescifradoRejillaD2").val("");
	
	$("#informacionRejilla1D").append("Dibujamos otra tabla de 6x6:");
	$("#informacionRejilla1D").slideToggle(800);
	posicion = $("#informacionRejilla1D").offset().top;
	$("html, body").animate({scrollTop: posicion}, 1000);
	await sleep(1200);
	
	$("#tablaTextoCifradoRejillaD").slideToggle(800);
	posicion = $("#tablaTextoCifradoRejillaD").offset().top;
	$("html, body").animate({scrollTop: posicion}, 1000);
	await sleep(800);
	
	var textoCifradoRejilla = ($("#textoCifradoRejillaD").val().toUpperCase()).split("");		
	var numeroCelda= 1;
		
	for(var i=0; i<6; i++)
	{		
		
		$("#fDR1").append('<td id="celdaTextoCifradoRejillaD'+numeroCelda+'"></td>');		
		
		numeroCelda++;
	}
	
	for(var i=0; i<6; i++)
	{			
		$("#fDR2").append('<td id="celdaTextoCifradoRejillaD'+numeroCelda+'"></td>');		
		
		numeroCelda++;			
	}
	
	for(var i=0; i<6; i++)
	{			
		$("#fDR3").append('<td id="celdaTextoCifradoRejillaD'+numeroCelda+'"></td>');		
		
		numeroCelda++;
	}
	
	for(var i=0; i<6; i++)
	{			
		$("#fDR4").append('<td id="celdaTextoCifradoRejillaD'+numeroCelda+'"></td>');		
		
		numeroCelda++;
	}
	
	for(var i=0; i<6; i++)
	{			
		$("#fDR5").append('<td id="celdaTextoCifradoRejillaD'+numeroCelda+'"></td>');		
		
		numeroCelda++;
	}
	
	for(var i=0; i<6; i++)
	{			
		$("#fDR6").append('<td id="celdaTextoCifradoRejillaD'+numeroCelda+'"></td>');		
		
		numeroCelda++;
	}
	
	$("#informacionRejilla1D").slideToggle(800);
	$("#informacionRejilla1D").empty();
	await sleep(900);
	$("#informacionRejilla1D").append("Colocamos la rejilla encima de la nueva tabla:");
	$("#informacionRejilla1D").slideToggle(800);
	posicion = $("#informacionRejilla1D").offset().top;
	$("html, body").animate({scrollTop: posicion}, 1000);
	await sleep(1750);
	
	for(var i=1; i<=36; i++)
	{
		$("#celdaTextoCifradoRejillaD"+i).css("backgroundColor", "black");
		$("#celdaTextoCifradoRejillaD"+i).css("color", "black");
	}	
	
	for(var i=0; i<celdasSeleccionadasRejillaC.length; i++)
	{
		if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor1")
		{
			$("#celdaTextoCifradoRejillaD1").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor1")
		{
			$("#celdaTextoCifradoRejillaD6").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor1")
		{
			$("#celdaTextoCifradoRejillaD36").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor1")
		{
			$("#celdaTextoCifradoRejillaD31").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor2")
		{
			$("#celdaTextoCifradoRejillaD2").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor2")
		{
			$("#celdaTextoCifradoRejillaD12").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor2")
		{
			$("#celdaTextoCifradoRejillaD35").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor2")
		{
			$("#celdaTextoCifradoRejillaD25").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor3")
		{
			$("#celdaTextoCifradoRejillaD3").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor3")
		{
			$("#celdaTextoCifradoRejillaD18").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor3")
		{
			$("#celdaTextoCifradoRejillaD34").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor3")
		{
			$("#celdaTextoCifradoRejillaD19").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor4")
		{
			$("#celdaTextoCifradoRejillaD7").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor4")
		{
			$("#celdaTextoCifradoRejillaD5").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor4")
		{
			$("#celdaTextoCifradoRejillaD30").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor4")
		{
			$("#celdaTextoCifradoRejillaD32").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor5")
		{
			$("#celdaTextoCifradoRejillaD8").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor5")
		{
			$("#celdaTextoCifradoRejillaD11").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor5")
		{
			$("#celdaTextoCifradoRejillaD29").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor5")
		{
			$("#celdaTextoCifradoRejillaD26").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor6")
		{
			$("#celdaTextoCifradoRejillaD9").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor6")
		{
			$("#celdaTextoCifradoRejillaD17").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor6")
		{
			$("#celdaTextoCifradoRejillaD28").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor6")
		{
			$("#celdaTextoCifradoRejillaD20").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor7")
		{
			$("#celdaTextoCifradoRejillaD13").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor7")
		{
			$("#celdaTextoCifradoRejillaD4").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor7")
		{
			$("#celdaTextoCifradoRejillaD24").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor7")
		{
			$("#celdaTextoCifradoRejillaD33").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor8")
		{
			$("#celdaTextoCifradoRejillaD14").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor8")
		{
			$("#celdaTextoCifradoRejillaD10").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor8")
		{
			$("#celdaTextoCifradoRejillaD23").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor8")
		{
			$("#celdaTextoCifradoRejillaD27").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante1Valor9")
		{
			$("#celdaTextoCifradoRejillaD15").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante2Valor9")
		{
			$("#celdaTextoCifradoRejillaD16").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante3Valor9")
		{
			$("#celdaTextoCifradoRejillaD22").css("backgroundColor", "#FDFD96");
		}
		else if(celdasSeleccionadasRejillaC[i]=="Cuadrante4Valor9")
		{
			$("#celdaTextoCifradoRejillaD21").css("backgroundColor", "#FDFD96");
		}
	}
	
	var auxCeldasSeleccionadasRejillaC = celdasSeleccionadasRejillaC.slice();
	var proxElementos= [];
	var posTextoCifradoRejilla= 0;
	
	for(var i=0; i<4; i++)
	{
		$("#informacionRejilla1D").slideToggle(800);		
		$("#informacionRejilla1D").empty();
		await sleep(900);
		$("#informacionRejilla1D").append("Por cada hueco de la rejilla, recorriendo fila por fila, vamos escribiendo letra por letra del criptograma:");
		$("#informacionRejilla1D").slideToggle(800);
		posicion = $("#informacionRejilla1D").offset().top;
		$("html, body").animate({scrollTop: posicion}, 1000);		
		await sleep(2750);
		
		for(var j=1; j<=36; j++)
		{
			if($("#celdaTextoCifradoRejillaD"+j).css('backgroundColor')=="rgb(253, 253, 150)")
			{
				 $("#celdaTextoCifradoRejillaD"+j).html(textoCifradoRejilla[posTextoCifradoRejilla]);
				 posTextoCifradoRejilla++;
				 await sleep(500);
			}			
		}			
		
		for(var j=1; j<=36; j++)
		{
			$("#celdaTextoCifradoRejillaD"+j).css("backgroundColor", "black");
			$("#celdaTextoCifradoRejillaD"+j).css("color", "black");
		}			
		
		for(var j=0; j<auxCeldasSeleccionadasRejillaC.length; j++)
		{
			if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor1"||auxCeldasSeleccionadasRejillaC[j]=="C1")
			{
				proxElementos.push("C6");
				$("#celdaTextoCifradoRejillaD6").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor1"||auxCeldasSeleccionadasRejillaC[j]=="C6")
			{
				proxElementos.push("C36");
				$("#celdaTextoCifradoRejillaD36").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor1"||auxCeldasSeleccionadasRejillaC[j]=="C36")
			{
				proxElementos.push("C31");
				$("#celdaTextoCifradoRejillaD31").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor1"||auxCeldasSeleccionadasRejillaC[j]=="C31")
			{
				proxElementos.push("C1");
				$("#celdaTextoCifradoRejillaD1").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor2"||auxCeldasSeleccionadasRejillaC[j]=="C2")
			{
				proxElementos.push("C12");
				$("#celdaTextoCifradoRejillaD12").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor2"||auxCeldasSeleccionadasRejillaC[j]=="C12")
			{
				proxElementos.push("C35");
				$("#celdaTextoCifradoRejillaD35").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor2"||auxCeldasSeleccionadasRejillaC[j]=="C35")
			{
				proxElementos.push("C25");
				$("#celdaTextoCifradoRejillaD25").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor2"||auxCeldasSeleccionadasRejillaC[j]=="C25")
			{
				proxElementos.push("C2");
				$("#celdaTextoCifradoRejillaD2").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor3"||auxCeldasSeleccionadasRejillaC[j]=="C3")
			{
				proxElementos.push("C18");
				$("#celdaTextoCifradoRejillaD18").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor3"||auxCeldasSeleccionadasRejillaC[j]=="C18")
			{
				proxElementos.push("C34");
				$("#celdaTextoCifradoRejillaD34").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor3"||auxCeldasSeleccionadasRejillaC[j]=="C34")
			{
				proxElementos.push("C19");
				$("#celdaTextoCifradoRejillaD19").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor3"||auxCeldasSeleccionadasRejillaC[j]=="C19")
			{
				proxElementos.push("C3");
				$("#celdaTextoCifradoRejillaD3").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor4"||auxCeldasSeleccionadasRejillaC[j]=="C7")
			{
				proxElementos.push("C5");
				$("#celdaTextoCifradoRejillaD5").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor4"||auxCeldasSeleccionadasRejillaC[j]=="C5")
			{
				proxElementos.push("C30");
				$("#celdaTextoCifradoRejillaD30").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor4"||auxCeldasSeleccionadasRejillaC[j]=="C30")
			{
				proxElementos.push("C32");
				$("#celdaTextoCifradoRejillaD32").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor4"||auxCeldasSeleccionadasRejillaC[j]=="C32")
			{
				proxElementos.push("C7");
				$("#celdaTextoCifradoRejillaD7").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor5"||auxCeldasSeleccionadasRejillaC[j]=="C8")
			{
				proxElementos.push("C11");
				$("#celdaTextoCifradoRejillaD11").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor5"||auxCeldasSeleccionadasRejillaC[j]=="C11")
			{
				proxElementos.push("C29");
				$("#celdaTextoCifradoRejillaD29").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor5"||auxCeldasSeleccionadasRejillaC[j]=="C29")
			{
				proxElementos.push("C26");
				$("#celdaTextoCifradoRejillaD26").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor5"||auxCeldasSeleccionadasRejillaC[j]=="C26")
			{
				proxElementos.push("C8");
				$("#celdaTextoCifradoRejillaD8").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor6"||auxCeldasSeleccionadasRejillaC[j]=="C9")
			{
				proxElementos.push("C17");
				$("#celdaTextoCifradoRejillaD17").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor6"||auxCeldasSeleccionadasRejillaC[j]=="C17")
			{
				proxElementos.push("C28");
				$("#celdaTextoCifradoRejillaD28").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor6"||auxCeldasSeleccionadasRejillaC[j]=="C28")
			{
				proxElementos.push("C20");
				$("#celdaTextoCifradoRejillaD20").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor6"||auxCeldasSeleccionadasRejillaC[j]=="C20")
			{
				proxElementos.push("C9");
				$("#celdaTextoCifradoRejillaD9").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor7"||auxCeldasSeleccionadasRejillaC[j]=="C13")
			{
				proxElementos.push("C4");
				$("#celdaTextoCifradoRejillaD4").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor7"||auxCeldasSeleccionadasRejillaC[j]=="C4")
			{
				proxElementos.push("C24");
				$("#celdaTextoCifradoRejillaD24").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor7"||auxCeldasSeleccionadasRejillaC[j]=="C24")
			{
				proxElementos.push("C33");
				$("#celdaTextoCifradoRejillaD33").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor7"||auxCeldasSeleccionadasRejillaC[j]=="C33")
			{
				proxElementos.push("C13");
				$("#celdaTextoCifradoRejillaD13").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor8"||auxCeldasSeleccionadasRejillaC[j]=="C14")
			{
				proxElementos.push("C10");
				$("#celdaTextoCifradoRejillaD10").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor8"||auxCeldasSeleccionadasRejillaC[j]=="C10")
			{
				proxElementos.push("C23");
				$("#celdaTextoCifradoRejillaD23").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor8"||auxCeldasSeleccionadasRejillaC[j]=="C23")
			{
				proxElementos.push("C27");
				$("#celdaTextoCifradoRejillaD27").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor8"||auxCeldasSeleccionadasRejillaC[j]=="C27")
			{
				proxElementos.push("C14");
				$("#celdaTextoCifradoRejillaD14").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante1Valor9"||auxCeldasSeleccionadasRejillaC[j]=="C15")
			{
				proxElementos.push("C16");
				$("#celdaTextoCifradoRejillaD16").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante2Valor9"||auxCeldasSeleccionadasRejillaC[j]=="C16")
			{
				proxElementos.push("C22");
				$("#celdaTextoCifradoRejillaD22").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante3Valor9"||auxCeldasSeleccionadasRejillaC[j]=="C22")
			{
				proxElementos.push("C21");
				$("#celdaTextoCifradoRejillaD21").css("backgroundColor", "#FDFD96");
			}
			else if(auxCeldasSeleccionadasRejillaC[j]=="Cuadrante4Valor9"||auxCeldasSeleccionadasRejillaC[j]=="C21")
			{
				proxElementos.push("C15");
				$("#celdaTextoCifradoRejillaD15").css("backgroundColor", "#FDFD96");
			}
		}
		
		auxCeldasSeleccionadasRejillaC = proxElementos.slice();		
		proxElementos= [];
		
		$("#informacionRejilla1D").slideToggle(800);		
		$("#informacionRejilla1D").empty();
		await sleep(900);
		$("#informacionRejilla1D").append("Giramos 90 grados hacia la derecha la rejilla...");
		$("#informacionRejilla1D").slideToggle(800);
		posicion = $("#informacionRejilla1D").offset().top;
		$("html, body").animate({scrollTop: posicion}, 1000);
		await sleep(2200);
	}
	
	$("#informacionRejilla1D").slideToggle(800);		
	$("#informacionRejilla1D").empty();
	await sleep(900);
	$("#informacionRejilla1D").append("Quitamos la rejilla y tenemos nuestro texto descifrado:");
	$("#informacionRejilla1D").slideToggle(800);
	posicion = $("#informacionRejilla1D").offset().top;
	$("html, body").animate({scrollTop: posicion}, 1000);
	await sleep(1900);
	
	var textoDescifrado= [];
	var cadenaDescifrada;
	
	for(var i=1; i<=36; i++)
	{
		$("#celdaTextoCifradoRejillaD"+i).css("backgroundColor", "#FDFD96");
		$("#celdaTextoCifradoRejillaD"+i).css("color", "black");
		textoDescifrado[i-1] = $("#celdaTextoCifradoRejillaD"+i).text();
		cadenaDescifrada = textoDescifrado.join("");
	}
	
	posicion = $("#textoDescifradoRejillaD2").offset().top;
	$("html, body").animate({scrollTop: posicion}, 1000);
	
	toastr.options.timeOut = "1000";
	toastr['success']('Texto descifrado');
	$("#textoDescifradoRejillaD2").val(cadenaDescifrada);
	
	celdasSeleccionadasRejillaC= [];	
	
	limpiaPanelRejillaC2();
	
	for(var i=1; i<=4; i++)
	{
		for(var j=1; j<=9; j++)
		{
			$("#Cuadrante"+i+"Valor"+j).css("backgroundColor", "transparent");
			$("#Cuadrante"+i+"Valor"+j).css("color", "black");
		}		
	}

	$("#btn-descifrarRejilla").removeAttr("disabled");
	$("#btn-descifrarRejilla").html('Descifrar');
}

function validarEntradaCifradoRejilla(){
	var mensaje = "";
	var texto = $('#textoPlanoRejillaC').val();

	if(texto.indexOf(' ') >= 0){
		mensaje = "El mensaje claro no debe contener espacios.";
	}
	else if (texto.length < 1 || texto.length > 10) {
		mensaje = "El mensaje claro debe contener entre 1 y 10 caracteres.";
	}
	else if(!texto.match(/^[a-zA-Z]+$/)){
		mensaje = "El mensaje claro solo puede contener caracteres de la <strong>a</strong> a la <strong>z</strong>.";
	}

	return mensaje;
}

function validarEntradaDescifradoRejilla(){
	var mensaje = "";
	var texto = $('#textoCifradoRejillaD').val();

	if(texto.indexOf(' ') >= 0){
		mensaje = "El criptograma no debe contener espacios.";
	}
	else if (texto.split(' ').length < 1 || texto.split(' ').length > 10) {
		mensaje = "El criptograma debe contener entre 1 y 10 numeros decimales.";
	}
	else if(!texto.match(/^[a-zA-Z]+$/)){
		mensaje = "El criptograma solo puede contener caracteres de la <strong>a</strong> a la <strong>z</strong>.";
	}
	

	return mensaje;
}

$(document).ready(function(){
	$("#btn-cifrarRejillaC").click(function(){
		var mensaje = validarEntradaCifradoRejilla();
		if(mensaje.length == 0){
			// if( $('#alert-cifrarRejilla').is(":visible") ){
			//     $('#alert-cifrarRejilla').slideToggle(1000);
			// }
			$("#btn-cifrarRejilla").attr("disabled","disabled");
			$("#btn-cifrarRejilla").html('<i class="fa fa-spinner fa-spin"></i> Cifrando...');
			cifrarRejillaC();
		}
		else{
			// $('#alert-cifrarRejilla').html(mensaje);
			// if( !$('#alert-cifrarRejilla').is(":visible") ){
			// 	$('#alert-cifrarRejilla').slideToggle(1000);
			// }
			toastr.options.timeOut = "1500";
			toastr.options.closeButton = true;
			toastr['error'](mensaje);
		}
	});

	$("#btn-copiarTextoRejilla").click(function(){
		if ($("#textoCifradoRejillaC2").val()==''){
			toastr.options.timeOut = "1500";
			toastr.options.closeButton = true;
			toastr['info']('Primero debes cifrar un mensaje');
		} else {
			$("#textoCifradoRejillaD").val($("#textoCifradoRejillaC2").val());
		}
	});

	$("#btn-descifrarRejilla").click(function(){
		var mensaje = validarEntradaDescifradoRejilla();
		if(mensaje.length == 0){
			// if( $('#alert-descifrarRejilla').is(":visible") ){
			//     $('#alert-descifrarRejilla').slideToggle(1000);
			// }
			$("#btn-descifrarRejilla").attr("disabled","disabled");
			$("#btn-descifrarRejilla").html('<i class="fa fa-spinner fa-spin"></i> Descifrando...');
			descifrarRejilla();
		}
		else{
			// $('#alert-descifrarRejilla').html(mensaje);
			// if( !$('#alert-descifrarRejilla').is(":visible") ){
			// 	$('#alert-descifrarRejilla').slideToggle(1000);
			// }
			toastr.options.timeOut = "1500";
			toastr.options.closeButton = true;
			toastr['error'](mensaje);
		}
	});
	    
});