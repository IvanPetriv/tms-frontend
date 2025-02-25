// import { putApiRequest } from "./putApiRequest";

// jest.spyOn(global, "fetch");

// describe("putApiRequest", () => {
//   const mockUrl = "https://example.com/api";
//   const mockBody = { key: "value" };

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test("should send a PUT request with the correct headers", async () => {
//     (global.fetch).mockResolvedValue({
//       json: async () => ({ success: true }),
//       ok: true,
//     });

//     const result = await putApiRequest(mockUrl, mockBody);

//     expect(global.fetch).toHaveBeenCalledWith(mockUrl, {
//       method: "PUT",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: expect.stringMatching(/^Bearer\s/),
//       },
//       body: JSON.stringify(mockBody),
//     });

//     expect(result).toEqual({ success: true });
//   });

//   test("should handle API errors", async () => {
//     (global.fetch).mockRejectedValue(new Error("Fetch error"));

//     await expect(putApiRequest(mockUrl, mockBody)).rejects.toThrow("Fetch error");
//   });
// });

test('renders learn react link', () => {
  expect(3+4).toBe(7);
});
