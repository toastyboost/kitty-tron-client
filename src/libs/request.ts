const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || '';

export type FormData = {
  file: File;
  name: string;
  meta?: {
    [index: string]: string;
  };
};

export type RequestProps = {
  method?: string;
  url: string;
  body?: object;
  file?: FormData;
  token?: string
};

function attachFormData({ file, name, meta }: FormData) {
  const data = new FormData();
  data.append(name, file);
  meta && Object.keys(meta).map((value) => data.append(value, meta[value]));
  return data;
}

export async function request<Result>({
  url,
  method = 'get',
  body,
  file,
  token = ''
}: RequestProps): Promise<Result> {
  const fetchUrl = url;

  const headers = {
    ...(!file && { 'Content-Type': 'application/json' }),
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const fetchOptions = {
    headers,
    method,
    ...(body && { body: JSON.stringify(body) }),
    ...(file && { body: attachFormData(file) }),
  };

  try {

    const response = await fetch(fetchUrl, fetchOptions);

    if (response.ok) {
      const { result } = await response.json() as { result: Result }
      return result
    }

    throw response
  } catch (err) {
    throw err
  }
};