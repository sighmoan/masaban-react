const getColumns: Response = {
  headers: [],
  ok: true,
  redirected: false,
  status: 200,
  statusText: "",
  type: "basic",
  url: "http://localhost:9001/api/v1/board/.../columns",
  clone: function (): Response {
    throw new Error("Function not implemented.");
  },
  body: null,
  bodyUsed: false,
  arrayBuffer: function (): Promise<ArrayBuffer> {
    throw new Error("Function not implemented.");
  },
  blob: function (): Promise<Blob> {
    throw new Error("Function not implemented.");
  },
  formData: function (): Promise<FormData> {
    throw new Error("Function not implemented.");
  },
  json: function (): Promise<string[]> {
    return Promise.resolve(["To do", "Doing", "Done"]);
  },
  text: function (): Promise<string> {
    throw new Error("Function not implemented.");
  },
};

export { getColumns };
