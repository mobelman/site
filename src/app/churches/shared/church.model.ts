import {ImageWithMetadata} from '../../shared/image-with-metadata.model';

export class Church {
  id: number;
  name: string;
  location: string;
  description: string;
  url: string;
  images: ImageWithMetadata[];
}
