const words = require("./words.json");
class Challenge {
  _InputGenrated = false;
  _OutputGenrated = false;
  _MinInput = 30;
  _MaxInput = 50;
  _InputsNum;
  _Inputs = [];
  _Output;
  constructor() {
    this._InputsNum =
      Math.floor(Math.random() * (this._MaxInput - this._MinInput)) +
      this._MinInput;
  }
  InputGenrator() {
    throw Error("Not implemented");
  }
  SetInput(inputs) {
    if (!this._InputGenrated) {
      this._Inputs = inputs;
      this._InputGenrated = true;
    }
  }
  CheckOutput(output) {
    if (!this._OutputGenrated) this.OutputGenrator();
    let b = output === this._Output;
    return {
      message: b
        ? "Correct answer"
        : typeof this._Output === "string"
        ? "Not Correct Try Again"
        : this._Output > output
        ? "Answer is Lower than what we expected."
        : "Answer is higher than what we expected.",
      result: b,
    };
  }
  OutputGenrator() {
    throw Error("Not implemented");
  }
}

class Challenge1 extends Challenge {
  InputGenrator() {
    if (!this._InputGenrated) {
      for (let i = 0; i < this._InputsNum; i++) {
        let input;
        do {
          input = Math.floor(Math.random() * 899) + 100;
        } while (this._Inputs.includes(input));
        this._Inputs.push(input);
      }
      this._InputGenrated = true;
    }
    return this.Inputs;
  }
  OutputGenrator() {
    if (!this._OutputGenrated) {
      this._Output = 0;
      for (let i = 100; i < 999; i++) {
        if (!this._Inputs.includes(i)) this._Output += i;
      }
      this._OutputGenrated = true;
    }
    return this._Output;
  }
}
class Challenge1S extends Challenge {
  #Characters;
  #uppercase;
  #lowercase;
  #numbers;
  #symbols;
  constructor() {
    super();
    this.#Characters = this.#uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.#Characters += this.#lowercase = "abcdefghijklmnopqrstuvwxyz";
    this.#Characters += this.#numbers = "0123456789";
    this.#Characters += this.#symbols = "!#$%&'()*<=>?@"; // "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    this.#uppercase = RegExp("[" + this.#uppercase + "]");
    this.#lowercase = RegExp("[" + this.#lowercase + "]");
    this.#numbers = RegExp("[" + this.#numbers + "]");
    this.#symbols = RegExp("[" + this.#symbols + "]");
  }

  GeneratePassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
      var character = Math.floor(Math.random() * this.#Characters.length);
      password += this.#Characters.charAt(character);
    }
    return password;
  }
  CorrectPassword(password) {
    password = password || "";
    return !(
      password.search(this.#uppercase) < 0 ||
      password.search(this.#numbers) < 0 ||
      password.search(this.#symbols) < 0 ||
      password.search(this.#lowercase) < 0 ||
      password.length < 6 ||
      password.length > 20
    );
  }
  InputGenrator() {
    if (!this._InputGenrated) {
      for (let i = 0; i < this._InputsNum; i++) {
        let input;
        do {
          input = this.GeneratePassword(Math.floor(Math.random() * 30) + 4);
        } while (this._Inputs.includes(input));
        this._Inputs.push(input);
      }
      this._InputGenrated = true;
    }
    return this.Inputs;
  }
  OutputGenrator() {
    if (!this._OutputGenrated) {
      this._Output = 0;
      this._Inputs.forEach((elm) => {
        if (this.CorrectPassword(elm))
          this._Output += Number(elm[elm.search(/[0-9]/)]);
      });
      this._OutputGenrated = true;
    }
    return this._Output;
  }
}
class Challenge2 extends Challenge {
  GenerateMessage(date, length) {
    let message =
      date
        .toLocaleDateString("FR-FR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })
        .replace("/", "-")
        .replace("/", "-") + ":";
    let ID = "";
    for (let i = 0; i < 8; i++) ID += Math.round(Math.random());
    message += ID;
    let mole = Math.round(Math.random() * 10) > 7;
    if (mole) length -= 8;
    for (let i = 0; i < length; i++) message += Math.round(Math.random());
    if (mole) message += ID;
    return message;
  }
  CorrectMessage(message) {
    message = message.split(":")[1];
    let ID1 = message.substr(0, 8),
      ID2 = message.substr(message.length - 8, 8);
    return ID1 === ID2;
  }
  InputGenrator() {
    if (!this._InputGenrated) {
      for (let i = 0; i < this._InputsNum; i++) {
        let input = this.GenerateMessage(
          new Date(
            2310,
            Math.round(Math.random() * 1) + 3,
            Math.round(Math.random() * 29) + 1
          ),
          Math.floor(Math.random() * 32) + 8
        );
        this._Inputs.push(input);
      }
      this._InputGenrated = true;
    }
    return this.Inputs;
  }
  OutputGenrator() {
    if (!this._OutputGenrated) {
      this._Output = 0;
      this._Inputs.forEach((elm) => {
        if (this.CorrectMessage(elm)) this._Output++;
      });
      this._OutputGenrated = true;
    }
    return this._Output;
  }
}
class Challenge2S extends Challenge {
  #chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  ShuffleWord(word, car) {
    word = word.split("");
    word.splice(Math.round(Math.random() * (word.length - 1)), 0, car);
    for (let i = word.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [word[i], word[j]] = [word[j], word[i]];
    }
    return word.join("");
  }
  GetIntuderChar(message) {
    let [shuffled, word] = message.split(" - ");
    word = word.split("");
    shuffled = shuffled.split("");
    for (let i = 0; i < word.length; i++) {
      let index = shuffled.indexOf(word[i]);
      if (index >= 0) {
        delete word[i];
        delete shuffled[index];
      }
    }
    return shuffled.join("");
  }
  InputGenrator() {
    if (!this._InputGenrated) {
      let inputs = [];
      for (let i = 0; i < this._InputsNum; i++) {
        let word, input;
        do {
          word = words[Math.round(Math.random() * 521)];
        } while (inputs.includes(input));
        inputs.push(word);
        input =
          this.ShuffleWord(word, this.#chars[Math.floor(Math.random() * 52)]) +
          " - " +
          word;
        this._Inputs.push(input);
      }
      this._InputGenrated = true;
    }
    return this.Inputs;
  }
  OutputGenrator() {
    if (!this._OutputGenrated) {
      this._Output = "";
      this._Inputs.forEach((elm) => {
        let car = this.GetIntuderChar(elm);
        console.log(elm, car);
        this._Output += car;
      });
      this._OutputGenrated = true;
    }
    return this._Output;
  }
}
/*let challenge1 = new Challenge1S();
challenge1.SetInput(["1Cd(P", "(!t)'3RIVlEuIHrZxNzN", "KZXIR=J('>QBMo'z8=!"]);
console.log(challenge1, challenge1.CheckOutput(11));*/

/*let challenge2 = new Challenge2();
challenge2.InputGenrator();
//challenge2.OutputGenrator();
/*challenge2.SetInput([
  "4-1-2310:110111110011001011000000010100010010011011111",
  "4-1-2310:101001000110101000111000",
  "4-1-2310:0100101101100110001110110001001011",
  "4-1-2310:11000111110010101001101100011101001101",
]);
console.log(challenge2, challenge2.CheckOutput(2));*/

let challenge2S = new Challenge2S();
//challenge2S.InputGenrator();
//challenge2S.OutputGenrator();
challenge2S.SetInput([
  "cmelop - plome",
  "erdenaxali - alexandre",
  "tagnatism - magnatism",
  "nalysaseo - seasonal",
  "twalahref - flatware",
  "asminacmeh - mechanism",
  "gylnexo - oxygen",
  "aitinodarl - radiation",
]);
console.log(challenge2S, challenge2S.CheckOutput("gFtKPo"));

exports.Challenge1 = Challenge1;
exports.Challenge1S = Challenge1S;
exports.Challenge2 = Challenge2;
exports.Challenge2S = Challenge2S;
