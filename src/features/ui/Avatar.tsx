export function Avatar({ name, initials, index = 0 }: { name: string; initials?: string; index?: number }) {
  return <span className={`avatar avatar-${index % 4}`} aria-hidden="true">{initials ?? name.split(' ').map(word => word[0]).join('')}</span>;
}
