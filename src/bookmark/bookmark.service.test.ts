import {rest} from 'msw'
import {setupServer} from 'msw/node'
import '@testing-library/jest-dom'
import { BookmarkService } from './bookmark.service'
import { photoData } from '../utils/testData'

const server = setupServer(
  rest.get('https://noembed.com/embed?url=flickr.com', (req, res, ctx) => {
    return res(ctx.json(photoData))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('should return bookmark info when call bookmark service getBookmarkInfo', async () => {
    const bookmark = await BookmarkService.getBookmarkInfo("flickr.com");
    expect(bookmark.title).toEqual("2022 Marche Vexin");
    expect(bookmark.url).toEqual("https://www.flickr.com/photos/feuilllu/51930941655/in/dateposted/");
})

test('should return error when server return 500', async () => {
    server.use(
        rest.get('https://noembed.com/embed?url=flickr.com', (req, res, ctx) => {
            return res(ctx.status(500))
        }),
    )
  
    BookmarkService.getBookmarkInfo("flickr.com").catch((error) => {
        expect(error.message).toEqual('Get bookmark info error');
    });
})