import { Button } from '@base-ui/react';
import { CheckIcon, LinkIcon, Share2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';

type SharePostProps = { title: string; url: string };

export const SharePost = ({ title, url }: SharePostProps) => {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    // Check if Web Share API is available
    if (typeof navigator !== 'undefined' && navigator.share) setCanShare(true);
  }, []);

  const handleShare = async () => {
    if (!canShare) return;
    try {
      await navigator.share({ title, url });
    } catch (err) {
      // User aborted or failed
      console.debug('Share cancelled or failed:', err);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className='flex items-center gap-3'>
      <span className='font-mono text-sm uppercase tracking-widest text-text-muted'>
        Share:
      </span>
      {canShare && (
        <Button
          onClick={handleShare}
          className='p-2 border-2 _border-border rounded-lg hover:border-primary hover:text-primary hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-border)] transition bg-bg'
          aria-label='Share post via device'
          title='Share post'
        >
          <Share2Icon className='size-4' />
        </Button>
      )}
      <Button
        onClick={handleCopy}
        className='p-2 border-2 border-border rounded-lg hover:border-primary hover:text-primary hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-border)] transition bg-bg'
        aria-label='Copy link to clipboard'
        title='Copy link'
      >
        {copied ? (
          <CheckIcon className='size-4 text-primary' />
        ) : (
          <LinkIcon className='size-4' />
        )}
      </Button>
    </div>
  );
};
