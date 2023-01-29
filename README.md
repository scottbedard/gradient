# `@bedard/gradient`

This library is a customizable version of the background animation at [Stripe.com](https://stripe.com/). I am not affiliated with Stripe, I just thought the animation was cool and wanted to learn how it worked. If you find this interesting, you may also like my exploration of [Warp's button animation](https://github.com/scottbedard/warp-buttons/).

[View live example →](https://gradient.scottbedard.net)

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

The animation can be started / stopped using the play and pause methods.
