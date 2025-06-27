import { JSDOM } from 'jsdom'
import { getByText } from '@testing-library/dom'

import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, '../src/404.html'), 'utf8')

let dom
let document, body, head

describe('404.html', () => {
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
    expect(getByText(head.querySelector('title'), 'patkub - 404 - Not Found')).toBeInTheDocument()
  })

  it('head section defines meta tags', () => {
    expect(head.querySelector('meta[charset=utf-8]')).not.toBeNull()
    expect(head.querySelector('meta[name=viewport]')).not.toBeNull()
    expect(head.querySelector('meta[name=description]')).not.toBeNull()
    expect(head.querySelector('meta[name=keywords]')).not.toBeNull()
  })

  it('main section contains link to home', () => {
    expect(body.querySelector('main')).not.toBeNull()
    expect(document.querySelector('[href="/"]')).not.toBeNull()
  })
})
