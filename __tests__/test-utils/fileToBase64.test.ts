import { fileToBase64 } from '../../src/utils/fileToBase64';

describe('fileToBase64', () => {
  it('should convert a file to a data URL', async () => {
    const file = new File(['test'], 'photo.png', { type: 'image/png' });
    const result = await fileToBase64(file);
    expect(result).toBe('data:image/png;base64,dGVzdA==');
  });
});
