# CLI Password Generator

Node.js CLI Password Generator 

## Usage

```
npm install
```


```
node index (options)
```

To create a symlink to run "passgen" from anywhere

```
npm link

# Now you can run
pgen (options)

# To remove symlink
npm unlink
```

## Options

| Short | Long              | Description                                   |
|------|-------------------|-----------------------------------------------|
| -l   | --length <number> | length of password (default: 30)              |
| -s   | --save [path]     | save password to file (default: passwords.txt) |
| -nn  | --no-numbers      | remove numbers                                |
| -nc  | --no-clipboard    | do not copy to clipboard                      |
| -np  | --no-print        | do not print                                  |
| -h   | --help            | display help for command                      |
| -V   | --version         | Show the version                              |