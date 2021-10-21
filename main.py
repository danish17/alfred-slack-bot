import json
import csv
import random


def get_config(key=''):
    with open('config.json') as config_file:
        config = json.load(config_file)
    if 'auth' == key:
        auth_token = config['token']
        return auth_token
    elif 'birthday_loc' == key:
        location = config['location']['birthday_wishes']
        return location
    elif 'anniversary_loc' == key:
        location = config['location']['anniversary_wishes']
        return location
    return config


def get_birthdays():
    pass


def get_anniversaries():
    pass


def generate_random_message(wish_type):
    if 'birthday' == wish_type:
        to_open = 'birthday_loc'
    elif 'anniversary' == wish_type:
        to_open = 'anniversary_loc'
    with open(get_config(to_open)) as csv_file:
        reader = csv.DictReader(csv_file, fieldnames=['wish'])
        wishes = []
        for row in reader:
            wishes.append(row)

        return wishes[random.randint(0, len(wishes) - 1)]['wish']


def main():
    print(get_config('anniversary_loc'))
    generate_random_message('birthday')
