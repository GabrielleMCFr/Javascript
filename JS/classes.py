class Menu:
  def __init__(self, name, items, start_time, end_time):
    self.name = name
    self.items = items
    self.start_time = start_time
    self.end_time = end_time

  def __repr__(self):
    string = self.name + ' menu available from ' + self.start_time + 'h to ' + self.end_time + 'h.'
    return string

  def calculate_bill(self, purchased_items):
    bill = 0
    for item in purchased_items:
      bill += self.items[item]
    return bill


class Franchise:
  def __init__(self, address, menus):
    self.address = address
    self.menus = menus
  
  def __repr__(self):
    return self.address

  def available_menus(self, time):
    available = []
    for menu in self.menus:
      if time >= int(menu.start_time) and time <= int(menu.end_time):
        available.append(menu.name)
    return available


class Business:
  def __init__(self, name, franchises):
    self.name = name
    self.franchises = franchises



brunchitems = {
  'pancakes': 7.50, 'waffles': 9.00, 'burger': 11.00, 'home fries': 4.50, 'coffee': 1.50, 'espresso': 3.00, 'tea': 1.00, 'mimosa': 10.50, 'orange juice': 3.50
}

brunch = Menu('brunch', brunchitems, '11', '16')

birditems = {
  'salumeria plate': 8.00, 'salad and breadsticks (serves 2, no refills)': 14.00, 'pizza with quattro formaggi': 9.00, 'duck ragu': 17.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 1.50, 'espresso': 3.00,
}
early_bird = Menu('early-bird', birditems, '15', '18')

dinneritems = {
  'crostini with eggplant caponata': 13.00, 'ceaser salad': 16.00, 'pizza with quattro formaggi': 11.00, 'duck ragu': 19.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 2.00, 'espresso': 3.00,
}
dinner = Menu('dinner', dinneritems, '17','23')

kidsitems = {
  'chicken nuggets': 6.50, 'fusilli with wild mushrooms': 12.00, 'apple juice': 3.00
}
kids = Menu('kids', kidsitems, '11', '21')

# tests
print(brunch)
print(brunch.calculate_bill(['pancakes', 'home fries', 'coffee']))
print(early_bird.calculate_bill(['salumeria plate', 'mushroom ravioli (vegan)']))

menus = [brunch, dinner, kids, early_bird]
flagship_store = Franchise("1232 West End Road", menus)
new_installment = Franchise("12 East Mulberry Street", menus)

# tests
print(flagship_store.available_menus(12))
print(flagship_store.available_menus(17))

business1 = Business("Basta Fazoolin' with my Heart", [flagship_store, new_installment])

arepas_menu = Menu("Take a' Arepa", {'arepa pabellon': 7.00, 'pernil arepa': 8.50, 'guayanes arepa': 8.00, 'jamon arepa': 7.50}, '10', '20')
arepas_place = Franchise("189 Fitzgerald Avenue", arepas_menu)
business2 = Business("Take a' Arepa", [arepas_place])