# `@bedard/gradient`

A customizable version of the background animation used by Stripe.com

[Click here for a live example](https://gradient.scottbedard.net)

### Basic usage

Install the script using the CDN

```html
<script src="https://unpkg.com/@bedard/gradient"></script>
```

Or via NPM

```bash
npm install @bedard/gradient
```

Then create an instance with reference to a canvas

```js
const canvas = document.querySelector('canvas')

new Gradient(canvas, {
  colors: ['#ffffff', '#f87171', '#f9a8d4', '#fef08a'],
  seed: Math.random(),
})
```

The animation can be started / stopped using the `play` and `pause` methods.
