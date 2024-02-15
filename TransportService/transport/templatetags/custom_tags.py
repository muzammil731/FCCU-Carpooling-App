from sre_constants import SUCCESS
from django import template
import geopy.distance

register = template.Library()

def for_range(value):
    loop=range(0,value)
    return loop

def card_color(value):
    if(value>3):
        return "card text-white bg-info"#blue
    elif(value==3):
        return "card text-white bg-success"#green
    elif(value==2):
        return "card text-white bg-warning"#yellow
    elif(value==1):
        return "card text-white bg-danger"#red
    else:
        return "card text-white bg-dark"#black not ratings given


def multiply(value, arg):
    return value * arg


def get_distance(value):
    try:
        coor1=value.split(',')
        cord1=(float(coor1[0]),float(coor1[1]))
        cord2=(31.526475, 74.333323)
        distance = geopy.distance.distance(cord1,cord2).km
        return str(distance)+" km"
    except:
        print("Wrong Coordinates")
        return "Wrong Coordinates"

register.filter('multiply', multiply)
register.filter('get_distance', get_distance)
register.filter('for_range', for_range)
register.filter('card_color', card_color)