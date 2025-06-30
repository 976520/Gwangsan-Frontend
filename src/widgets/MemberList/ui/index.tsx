import { AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TableCell, TableRow } from '@/components/ui/table';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { Clock, Edit, UserX } from 'lucide-react';
import {
  MemberType,
  ROLE_TYPES,
  RoleTypeOptions,
  STATE_TYPES,
} from '../model/memberType';
import { getRoleBadgeColor, getStatusBadgeColor } from '../lib/handleColor';
import { suspensionPeriodOptions } from '@/shared/model/Period';
import {
  AlertDialogAction,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog';
import { DialogClose } from '@radix-ui/react-dialog';

interface MemberListProps {
  members: MemberType[];
}

export default function MemberList({ members }: MemberListProps) {
  return members.map((member) => (
    <TableRow key={member.id}>
      <TableCell className="flex items-center space-x-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={member.avatar || '/placeholder.svg'} />
          <AvatarFallback>{member.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{member.name}</div>
          <div className="text-sm text-gray-500">{member.email}</div>
        </div>
      </TableCell>
      <TableCell>
        <Badge className={getRoleBadgeColor(member.role)}>
          {ROLE_TYPES[member.role]}
        </Badge>
      </TableCell>

      <TableCell>
        <Badge className={getStatusBadgeColor(member.status)}>
          {STATE_TYPES[member.status]}
        </Badge>
          
      </TableCell>
      <TableCell>{member.joinDate.toString()}</TableCell>
      <TableCell>
        <div className="flex items-center space-x-2">
          {/* 활동 정지 모달 */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Clock className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>활동 정지</DialogTitle>
                <DialogDescription>
                  {member.name}님의 활동을 일시 정지합니다.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>정지 기간</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="기간 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      {suspensionPeriodOptions.map((v, i) => {
                        return (
                          <SelectItem value={v.value} key={i}>
                            {v.label}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <DialogClose>
                  <Button variant="outline">취소</Button>
                </DialogClose>
                <Button>저장</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          {/* 회원 역할 수정 */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>회원 정보 수정</DialogTitle>
                <DialogDescription>
                  배경진님의 정보를 수정합니다.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="role">역할</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {RoleTypeOptions.map((v, i) => {
                        return (
                          <SelectItem value={v.value} key={i}>
                            {v.label}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <DialogClose>
                  <Button variant="outline">취소</Button>
                </DialogClose>
                <Button>저장</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <UserX className="h-4 w-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>강제 탈퇴</AlertDialogTitle>
                  <AlertDialogDescription>
                    {member.name}님을 강제 탈퇴시키시겠습니까? 이 작업은 되돌릴
                    수 없습니다.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>취소</AlertDialogCancel>
                  <AlertDialogAction>탈퇴</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Dialog>
        </div>
      </TableCell>
    </TableRow>
  ));
}
