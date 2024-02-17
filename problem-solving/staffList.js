class StaffList {
  constructor() {
    this.collection = [];
  }

  add(name, age) {
    if (age > 20) {
      this.collection.push(name);
    } else {
      throw new Error("Staff member age must be greater than 20");
    }
  }
  remove(name) {
    if (this.collection.includes(name)) {
      let nameToRemove = this.collection.indexOf(name);
      this.collection.splice(nameToRemove, 1);
      return true;
    } else {
      return false;
    }
  }
  getSize() {
    return this.collection.length;
  }
}

const staffList = new StaffList();
