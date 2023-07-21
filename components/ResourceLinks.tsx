import React from 'react';
import { GhButton, DocButton, ReleaseButton, DownloadButton } from './Buttons';

interface Props {
  children?: React.ReactNode;
  repo: string;
  docs?: string;
  download?: string;
}

const ResourceLinks = ({ repo, docs, download }: Props) => {
  return (
    <div className="flex flex-wrap gap-1">
      <GhButton link={repo} />
      {download && <DownloadButton link={download }/>}
      {docs && <DocButton link={docs} />}
    </div>
  );
};

export default ResourceLinks;
