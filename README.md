# Vercel AI SDK Fundamentals

## Notes

Hacking around with the AI SDK Fundamentals repo from Vercel. I managed to get it working with Mistral and I changed the Generate-UI-StreamUI page to output audio with Cartesia. If you paste text into the "Add to Queue" field. You have to paste because it keeps clearing the text field. Add Cartesia with a Provider but now I have a repo that can do Cartesia server side, see voice-agent repo.

Have moved on to other repos now.

Using Mistral API key.

Cartesia component is working but need to use .env value correctly. How to use in `app` client v server side.

Generate UI is working
- http://localhost:3000/examples/generate-ui-streamui
- The idea would be to add ability to upload an image and send that
- [ ] Just get back a description
- [ ] Tell a story
- [ ] Play cartesia component
- [ ] Tool use to control Cartesia API
- [ ] Play Stable Audio Open
- [ ] Pick a path option

## Original readme

This project showcases the fundamentals of the Vercel AI SDK.

Tu run on your local machine:

- create a `.env` and add `OPENAI_API_KEY=sk-your-key`
- run `pnpm install`
- run `pnpm run dev`

To run the terminal programs, run `pnpm tsx core/name_of_file.ts`

To learn more about the Vercel AI SDK, check out the [docs](https://sdk.vercel.ai/docs)
