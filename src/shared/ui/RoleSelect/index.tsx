import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface RoleSelectProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
}

export function RoleSelect({
  value,
  onChange,
  name,
  defaultValue,
}: RoleSelectProps) {
  return (
    <Select
      value={value}
      defaultValue={defaultValue}
      onValueChange={onChange}
      name={name}
    >
      <SelectTrigger>
        <SelectValue placeholder="역할 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ROLE_USER">일반 계정</SelectItem>
        <SelectItem value="ROLE_PLACE_ADMIN">코디네이터</SelectItem>
        <SelectItem value="ROLE_HEAD_ADMIN">사무국</SelectItem>
      </SelectContent>
    </Select>
  );
}
