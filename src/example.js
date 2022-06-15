import Gradient from './main'

const canvas = document.querySelector('canvas')

new Gradient(canvas, {
  colors: ['#ffffff', '#f87171', '#f9a8d4', '#fef08a'],
  seed: Math.random(),
})
