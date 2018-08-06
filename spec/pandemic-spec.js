import { Pandemic } from './../src/pandemic.js';

describe('Pandemic', function() {
  let population = new Pandemic("Population");


  // beforeEach(function() {
  //   jasmine.clock().install();
  //   us.setPopulationUs();
  // });
  // afterEach(function() {
  //   jasmine.clock().uninstall();
  // });

  beforeEach(function() {
    jasmine.clock().install();
    population.popManipulator();
    //population.infectedPop();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  // it('should give a health of 92 after 4001 milliseconds', function() {
  //   jasmine.clock().tick(4001);
  //   expect(us.health).toEqual(92);
  //   console.log(us.health);
  // });

  it('should give a name and health of 100 when it is created', function() {
    expect(population.name).toEqual("Population");
    expect(population.healthy).toEqual(100000);
    expect(population.infected).toEqual(0);
  });

  it("should have a healthy pop of 99960 and an infected pop of 40 after 4001 milliseconds", function() {
    jasmine.clock().tick(4001);
    expect(population.healthy).toEqual(99960);
    expect(population.infected).toEqual(40);
  });
  it('should be in crital condition when health gets to 0', function() {
    population.nuke();
    console.log(population.healthy);
    expect(population.popZero()).toEqual(true);
  });
  it('should restore population if cure is found', function() {
    jasmine.clock().tick(9001);
    console.log(population.healthy);
    console.log(population.infected);
    population.curePop();
    expect(population.healthy).toEqual(100000);
  });
  it('should make 100 people healthy if medicine is found', function() {
    population.medicine();
    expect(population.healthy).toEqual(100100);
    expect(population.infected).toEqual(-100);
  });
  it('should infected 1000 people if mutation is found', function() {
    population.curePop();
    console.log(population.healthy);
    population.mutation();
    expect(population.healthy).toEqual(99000);
    expect(population.infected).toEqual(1000);
  });
  it('should infected everyone', function() {
    population.nuke();
    expect(population.healthy).toEqual(0);
    expect(population.healthy).toEqual(0);
  });
});
