/**
 * The sports QYNE's skill-based assessment covers. Cricket ships first (Phase 1);
 * the rest roll out on the same expert-built, video-powered framework. Kept in
 * one place so the home teaser and the /cricket page stay in sync.
 */
export interface Sport {
  name: string
  /** 'live' — available now (Phase 1); 'soon' — on the roadmap. */
  status: 'live' | 'soon'
}

export const SPORTS: Sport[] = [
  { name: 'Cricket', status: 'live' },
  { name: 'Tennis', status: 'soon' },
  { name: 'Volleyball', status: 'soon' },
  { name: 'Badminton', status: 'soon' },
  { name: 'Football', status: 'soon' },
  { name: 'Hockey', status: 'soon' },
  { name: 'Athletics', status: 'soon' },
]
