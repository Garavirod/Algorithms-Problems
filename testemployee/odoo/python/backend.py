from faker import Faker
import json
class FillDBBDummy:
    def __init__(self) -> None:
        self.fake = Faker()
        self.users = {} # table users
        self.cities = {} # table cities

    def write_file(self, file_name, table):
        """Write the data into a JSON file"""
        with open(f'{file_name}.json', 'w') as fp:
            json.dump(table, fp)
        print(f"{file_name} file has been created.")
       
    def fill_users_table(self,num_records):
        """Function to generate dummy data for table User"""
        # Generate fake data
        for n in range(0, num_records):
            self.users[n]={}
            self.users[n]['id'] = self.fake.random_number(digits=5)
            self.users[n]['first_name']= self.fake.first_name()
            self.users[n]['last_name']= self.fake.last_name()
            self.users[n]['id_city'] = self.fake.random_number(digits=5)
    
        # Write the data into the JSON file
        self.write_file('users',self.users)

    def fill_cities_table(self,num_records):
        """Function to generate dummy data for table Cities"""
        # Generate fake data
        for n in range(0, num_records):
            self.cities[n]={}
            self.cities[n]['id_city'] = self.fake.random_number(digits=5)
            self.cities[n]['name'] = self.fake.country()
    
        #Write the data into the JSON file
        self.write_file('cities',self.cities)
        
if __name__ == '__main__':
    fill_db = FillDBBDummy()
    fill_db.fill_cities_table(30)
    fill_db.fill_users_table(100)   
