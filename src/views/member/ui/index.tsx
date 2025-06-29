import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { sampleMembers } from '@/widgets/MemberList/mock/memberMockData';
import { MemberType } from '@/widgets/MemberList/model/memberType';
import MemberList from '@/widgets/MemberList/ui';

const TabValues = ['회원', '역할', '상태', '가입일', '관리'];

export default function MemberView() {
  return (
    <Tabs className="p-4" defaultValue="members">
      <TabsContent value="members" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>회원 목록</CardTitle>
            <CardDescription>
              전체 회원을 관리하고 권한을 설정할 수 있습니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  {TabValues.map((v, i) => {
                    return <TableHead key={i}>{v}</TableHead>;
                  })}
                </TableRow>
              </TableHeader>
              <TableBody>
                <MemberList members={sampleMembers as MemberType[]} />
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
