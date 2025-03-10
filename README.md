# NekoGoo Baka Hub

## Web App ([site](https://nekogoo.github.io), [repo](https://github.com/NekoGoo/nekogoo.github.io))

Personal site for hobbies, aspirations, game news, game design, engine info, and patch notes.

### Project Commands Used (global)

Install linting (ESLint) & formatting (Prettier)

```bash
npm i -D eslint prettier
npm i -D eslint-config-prettier eslint-plugin-prettier
npm i -D eslint-plugin-import eslint-config-airbnb-base eslint-config-airbnb-typescript
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Ensure repository's remote path uses the correct SSH host key (`git@<Host>:<User>/<Project>`)

```bash
git remote -v
git remote set-url origin git@github.com-nekogoo:NekoGoo/nekogoo.github.io.git
```

### Using Git LFS (Large File Storage)

LFS is used for large or frequently changing binary files.&nbsp; It is only applied when `.gitattributes` specifies files like so `*.png filter=lfs diff=lfs merge=lfs -text`.&nbsp; It results in reduced repo size but requires an extra dependency.

```bash
sudo apt install git-lfs
git lfs install
git lfs pull
```
