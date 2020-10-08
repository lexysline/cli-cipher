## Install

```
git clone https://github.com/lexysline/cli-cipher
npm install
```

---

## How it works

The CLI tool accept 4 options (short alias and full name):

```
    -s, --shift: a shift
    -i, --input: an input file
    -o, --output: an output file
    -a, --action: an action encode/decode
```

### Usage example:

```

 node ceaser-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"

 node ceaser-cli --action encode --shift 2 --input input.txt --output output.txt

 node ceaser-cli --action decode --shift 7 --input input.txt --output output.txt

>    input.txt This is secret. Message about "_" symbol!

>    output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

```
