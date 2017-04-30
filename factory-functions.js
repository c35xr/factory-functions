const Dog = () => {
	const sound = "woof";
	const count = Math.random();
	let dogName = "Firulais";
	return {
		setName : (name) => {
			dogName = name
			console.log(dogName);
		},
		talk : () => console.log("My name is  "+ dogName +", " + sound),
		count : () => console.log(count)
	}
}

const SantaHelper = Dog();
SantaHelper.setName("SantaHelper");
SantaHelper.talk();
SantaHelper.count();
SantaHelper.count();

const Sparky = Dog();
Sparky.setName("Sparky");
Sparky.talk();
Sparky.count();
Sparky.count();

console.log(Sparky);