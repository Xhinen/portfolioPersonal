
import math
import random
import string

from setuptools.command.alias import alias

#1 GENERADOR DE NOMBRES DE USUARIO
# Pide al usuario su nombre y apellido
nombre = input("Introduce un nombre: ")
#Genera el nombre de usuario en minúsculas, sin espacios.
nombre_sin_espacio = "".join(nombre.split()).lower()
print("Nombre de usuario: ", nombre_sin_espacio)
#Añade un número aleatorio al final.
numero = random.randint(1,100) #generador de numero aleatorio
#Muestra el nombre de usuario generado
print("Nombre y número aleatorio: ", nombre_sin_espacio, numero)

#2 ANALIZADOR DE FRASES
#Pide al usuario que ingrese una frase.
frase = input("Escribe una frase: ")
#Muestra la cantidad de caracteres de la frase.
print("La longitud de la frase es: ", len(frase))
#Indica si la frase contiene la palabra "Python"
print("¿Tiene la frase la palabra python?: ", "Python" in frase)
#Convierte la frase a mayúsculas
print("Mostramos la frase en mayúsculas: ", frase.upper())
#Muestra la frase invertida
print("Mostramos la frase invertida: ", "".join(reversed(frase)))

#3 CÁLCULO DE DESCUENTOS
#Pide al usuario el precio de un producto
precio = float(input("Introduce el precio del producto: "))
#Aplica un 15% de descuento
precio_descuento = (precio - (precio*15/100))
#Muestra el precio con 2 decimales
print("Aquí tienes el 15% de descuento: {:.2f}".format(precio_descuento))
#Muestra el precio redondeando hacia arriba
print("Redondeamos hacia arriba: ", math.ceil(precio_descuento))

#4 GENERADOR DE ETIQUETAS DE PRODUCTOS
#Pido nombre de un producto y su precio
nombre_producto = (input("Introduce nombre del producto: "))
precio_producto = float(input("Introduce el precio del producto: "))
#Convierte el nombre del producto en mayúsculas
print("Nombre del producto en mayúsculas: ", nombre_producto.upper())
#Muestra el precio con dos decimales.
print("Precio del producto con 2 decimales: {:.2f}".format(precio_producto))
#Genera un código basado en el valor ASCII de la primera letra del producto.
extraer_letra = nombre_producto[:1]
print("Valor ASCII de la primera letra: ", ord(extraer_letra))

#5 CONVERSIÓN DE TIPOS Y MANIPULACIÓN DE LISTAS
#Pide al usuario una lista de números separados por comas.
numeros_cadena = input("Introduce una lista de números separados por comas: ")
#Convierte cada número en entero
numeros_lista = numeros_cadena.split(",")
numeros_enteros = list(map(int, numeros_lista))
print("Convertida la lista en números enteros: ", numeros_enteros)
#Elimina los números repetidos y muestra la lista ordenada
sin_duplicados = set(numeros_enteros)
print("Lista sin números repetidos: ", sin_duplicados)

#6 CREACIÓN DE MENSAJES PERSONALIZADOS
#Pide al usuario su nombre, edad y ciudad.
nombre = input("Introduce tu nombre: ")
edad = int(input("Introduce tu edad: "))
ciudad = input("Introduce tu ciudad: ")
#La verdad no se me ocurría como redondear hacia arriba para el caso de que la edad fuese inferior a 18 sin usar condicionales
edad_redondeada = math.ceil(edad / 18) * 18 #No funciona para redondear hacia arriba en el caso de que el número introducido sea inferior a 18
#Muestra un mensaje con toda la información
print("Te llamas " + nombre + " tienes " + str(edad) + " años y vives en " + ciudad + ".")
#Otra opción mas moderna seria
print(f"Te llamas {nombre} tienes {edad} años y vives en {ciudad}.")

#7 GENERADOR DE CONTRASEÑAS ALEATORIAS (NO TENGO NI IDEA DE COMO HACERLO XD)
#Pide al usuario su nombre
# nombre = input("Introduce tu nombre: ")
#Genera una contraseña segura con la primera letra en mayúscula, un número aleatorio y un símbolo especial.

#8 VERIFICACIÓN DE NOMBRES EN LISTAS
# Pide al usuario su nombre.
nombre = input("Por favor indica tu nombre: ")
lista = ["Maria", "Luis", "Alberto", "Juan", "Fernando", "Cristina"]
print(f"¿{nombre} esta en la lista?", nombre in lista)
posicion = lista.index(nombre)
print("La posición es: ", posicion)

#9 MANIPULACIÓN DE NOMBRE
#Pide al usuario su nombre y apellido.
nombre = input("Introduce tu nombre: ")
apellido = input("Introduce tu primer apellido: ")
#Convierte el nombre a minúsculas y el apellido a mayúsculas.
nombre_minusculas = nombre.lower()
apellido_mayusculas = apellido.upper()
#Genera un alias combinando las primeras 3 letras del nombre y del apellido.
nombre3 = nombre[:3]
apellido3 = apellido[:3]
alias1 = ''.join(random.sample(nombre3, 3)) + ''.join(random.sample(apellido3, 3))
print(f"El alias generado es {alias1}")

#10 FORMATEAR Y MOSTRAR DATOS MATEMÁTICOS
#Pide al usuario un número decimal.
numero = int(input("Introduce un número decimal: "))
#Muestra el número redondeado a dos decimales.
print("Numero introducido con 2 decimales: {:.2f}".format(numero))
#Calcula y muestra su cuadrado.
print("Su cuadrado es: ", numero**2)
#otra opción
print("Su cuadrado es: ", math.pow(numero, 2))
#Calcula y muestra su raíz cuadrada.
print("Su raiz cuadrada es: ", math.sqrt(numero))