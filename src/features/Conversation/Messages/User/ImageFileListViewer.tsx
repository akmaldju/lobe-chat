import { PreviewGroup } from '@lobehub/ui';
import { memo } from 'react';

import GalleyGrid from '@/components/GalleyGrid';
import ImageItem from '@/components/ImageItem';

interface ImageFileItem {
  alt?: string;
  asyncTaskId?: string;
  generationId?: string;
  id: string;
  loading?: boolean;
  onRemove?: (id: string) => void;
  url: string;
}

interface FileListProps {
  items: ImageFileItem[];
}

const ImageFileListViewer = memo<FileListProps>(({ items }) => {
  return (
    <PreviewGroup>
      <GalleyGrid
        items={items}
        renderItem={({ id, url, alt, loading, onRemove, asyncTaskId, generationId }) => (
          <ImageItem
            alt={alt}
            asyncTaskId={asyncTaskId}
            generationId={generationId}
            loading={loading}
            onRemove={() => onRemove?.(id)}
            url={url}
          />
        )}
      />
    </PreviewGroup>
  );
});

export default ImageFileListViewer;
