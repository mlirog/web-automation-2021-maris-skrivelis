import { WebsiteTest } from '../test-objects/website_test'

import {pages} from './pages'

export class Tests {
    constructor(pages) {
        this.WebsiteTest = new WebsiteTest(pages)
    }
}

const tests = new Tests(pages)

export {tests}