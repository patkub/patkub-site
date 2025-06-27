import { JSDOM } from 'jsdom'
import { getByText } from '@testing-library/dom'

import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8')

let dom
let document, body, head

describe('index.html', () => {
  beforeEach(() => {
    dom = new JSDOM(html)
    document = dom.window.document
    body = document.body
    head = document.head
  })

  it('has language set', () => {
    expect(document.querySelector('html[lang=en]')).not.toBeNull()
  })

  it('has title set', () => {
    expect(getByText(head.querySelector('title'), 'patkub')).toBeInTheDocument()
  })

  it('head section defines meta tags', () => {
    expect(head.querySelector('meta[charset=utf-8]')).not.toBeNull()
    expect(head.querySelector('meta[name=viewport]')).not.toBeNull()
    expect(head.querySelector('meta[name=description]')).not.toBeNull()
    expect(head.querySelector('meta[name=keywords]')).not.toBeNull()
  })

  it('main section contains name', () => {
    expect(body.querySelector('main')).not.toBeNull()
    expect(getByText(body.querySelector('main'), 'Patrick Kubiak')).toBeInTheDocument()
  })

  it('footer section contains name', () => {
    expect(body.querySelector('footer')).not.toBeNull()
    expect(getByText(body.querySelector('footer'), 'Patrick Kubiak')).toBeInTheDocument()
  })
})
