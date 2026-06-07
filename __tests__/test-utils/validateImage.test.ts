import { validateImage } from '../../src/utils/validateImage';
import { MAX_IMAGE_SIZE_BYTES } from '../../src/utils/validateImage';

describe('validateImage', () => {
  it('should return an error if the image is not provided', () => {
    const result = validateImage(undefined);
    expect(result).toBe('Image is required');
  });
  it('should return an error if the image is not a valid type', () => {
    const result = validateImage(
      new File(['test'], 'test.txt', { type: 'text/plain' })
    );
    expect(result).toBe('Only PNG and JPEG images are allowed');
  });
  it('should return an error if the image is too large', () => {
    const largeContent = new Uint8Array(6 * 1024 * 1024);
    const result = validateImage(
      new File([largeContent], 'test.png', { type: 'image/png' })
    );
    expect(result).toBe(
      `Image size must not exceed ${MAX_IMAGE_SIZE_BYTES / 1024 / 1024} MB`
    );
  });
});
