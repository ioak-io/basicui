import React, { useState, useRef, useEffect } from "react";
import AppShell, { AppShellProps } from ".";
import AppShellTopbar from "./AppShellTopbar";
import AppShellNavbar from "./AppShellNavbar";
import AppShellBody from "./AppShellBody";

const StoryWrapper = (props: AppShellProps) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  return (
    <AppShell
      isSidebarExpanded={isSidebarExpanded}
      onSidebarToggle={() => setIsSidebarExpanded(!isSidebarExpanded)}
    >
      <AppShell.Topbar>Topbar</AppShell.Topbar>
      <AppShell.Navbar>
        <AppShell.Navbar.Header>Navbar header</AppShell.Navbar.Header>
        <AppShell.Navbar.Body
          isSidebarExpanded={isSidebarExpanded}
          onSidebarToggle={() => setIsSidebarExpanded(!isSidebarExpanded)}
        >
          Consectetur magni exercitationem nostrum tempora architecto quisquam
          eos qui perspiciatis ipsum non sed dicta. Ratione ipsum et minima
          quisquam quis labore ipsum aliquam ipsum commodi sed aspernatur. Ipsum
          voluptatem est quia dolores odit fugiat aut aliquid corporis veniam
          quam. Eos fugit ut enim eaque autem esse minima ipsam molestiae sed.
          Doloremque quis pariatur nemo amet amet nisi doloremque. Fugit quis ut
          inventore ut reprehenderit amet dolores dolor nesciunt rem tempora
          exercitationem. Quaerat nisi eum quasi consequuntur molestiae nihil
          pariatur dolorem. Nihil fugiat totam omnis error minima perspiciatis
          autem. Numquam eum labore odit est minima eos ipsum consectetur esse.
          Est accusantium ad quaerat dicta dolorem et aliquam consequatur nemo
          explicabo dolore eius quisquam. Dicta odit corporis dolor enim
          perspiciatis suscipit. Porro reprehenderit nisi dolore natus quis
          vitae. Dicta amet quisquam dolor consequatur esse vitae qui eaque
          dolorem aspernatur. Doloremque nemo accusantium modi ipsa eaque in
          commodi et. Qui eum minima nesciunt ea nisi iste eaque quae incidunt
          ullam veniam ipsum. Error neque fugit nostrum modi quo dolores magni
          magnam. Velit minima laboriosam quia numquam velit odit nihil ipsa
          omnis eos aspernatur est. Odit ipsam incidunt ea labore magnam modi
          laudantium suscipit sunt numquam suscipit. Velit fugiat sequi incidunt
          amet aut laudantium ad nostrum ullam voluptas fugiat. Ab ullam vitae
          ratione quis dicta quia sunt. Qui perspiciatis consequuntur eaque rem
          eaque fugit eaque nostrum dolor quo molestiae laudantium. Voluptate
          vel architecto iure enim aliquam laboriosam eum exercitationem vitae
          amet exercitationem nisi natus. Aliquid nostrum natus veritatis iure
          consectetur et aspernatur ratione et aut. Consequuntur explicabo ipsam
          laudantium veniam labore voluptate. Ad ab quis sit accusantium quae
          inventore. Est consequuntur ipsum perspiciatis est doloremque minima
          est corporis. In ullam fugiat sunt voluptate nostrum tempora magni
          laboriosam ad fugit. Modi voluptate dolor numquam quo magni ad porro
          ipsum commodi sunt omnis aliquam fugiat. Voluptate ullam sequi quo
          magnam nihil iure. Dolore ea eius dolorem aliquam accusantium aperiam
          explicabo ipsum illum tempora consequuntur corporis laboriosam.
          Laudantium nisi quo eum ex qui inventore esse pariatur tempora dolorem
          commodi ipsam. Voluptatem quam veritatis laboriosam amet error
          voluptatem dolores quasi ea natus doloremque. Beatae pariatur modi
          suscipit sit totam vel et. Aliquid laboriosam sequi amet esse minima
          aliquam voluptate dolorem illo autem quasi. Veniam ab eius dolorem
          molestiae quaerat ad omnis consequatur. Voluptatem dicta adipisci est
          commodi odit adipisci quia sunt nostrum ratione. Aliquam molestiae
          consequatur quia in laboriosam doloremque consequuntur reprehenderit
          quisquam consectetur laudantium enim. Voluptatem veniam ut aut sequi
          ullam magni ullam doloremque laudantium amet. Vel nostrum ab et rem
          non eaque laudantium sunt eius aspernatur minima. Ipsa error nulla
          dolorem neque ab ipsum sit nemo veniam velit ipsum. Sequi illum
          commodi ipsum dolores quis iste voluptas amet ullam ea inventore
          explicabo dolore. Ad amet eius laboriosam in nisi illo nostrum
          explicabo consequatur ratione. Eum velit quia nemo est aliquam quo
          aut. Adipisci molestiae adipisci ipsa esse ad ab illum quae molestiae
          aspernatur dolore ipsam architecto. Laboriosam numquam dolore in esse
          ipsam odit totam ipsa. Nemo illo neque enim labore dolorem sequi. Rem
          ratione reprehenderit eum adipisci aut corporis molestiae aliquam
          aliquid modi sequi. Sequi beatae dolor ad pariatur consequatur
          laboriosam aut voluptate. Veritatis magnam eos accusantium veniam quae
          quia non explicabo eius accusantium. Ab magni ad inventore nulla in ea
          ut vitae nulla laboriosam corporis. Vitae ut ex natus sed ut vel dolor
          voluptas fugit nostrum dolores. Fugit quisquam voluptas aut dolor
          suscipit dolores voluptatem. Nemo exercitationem incidunt aspernatur
          reprehenderit ipsum ut. Voluptate commodi aut magnam non aut ratione
          autem voluptate rem esse tempora. Dolore nemo voluptate labore nisi
          nisi aliquam ullam natus quae. Ipsa aliquid ullam quis eaque
          perspiciatis doloremque nemo. Ad vitae adipisci aspernatur
          consequuntur qui pariatur numquam doloremque est eaque unde tempora
          tempora. Explicabo unde illum eum in in et. Ex qui illum enim
          consequuntur laboriosam aperiam omnis eos ea quasi numquam veritatis
          architecto. Est ullam incidunt labore sed fugiat voluptas commodi
          dolorem in consequuntur. Nihil nisi quam iure qui ipsa suscipit
          quaerat magni consequuntur odit. Totam odit perspiciatis nesciunt
          totam eum autem ea sed in laudantium nesciunt laudantium. Sed corporis
          explicabo dolores laboriosam ea veritatis. Omnis perspiciatis amet
          nisi sed iste sed ipsam et autem non voluptas consequuntur. Voluptatem
          vel consectetur incidunt nihil ratione error. Magni consectetur ipsa
          laboriosam beatae ratione nemo aut. Magnam labore suscipit aliquid
          quaerat aliquid eius quasi quaerat quae nisi molestiae. Fugit nemo
          reprehenderit illo in iste exercitationem. Ipsum beatae dolorem vitae
          nisi odit velit. Explicabo aliquid nulla est iure nemo ut sequi
          tempora consectetur consequuntur qui rem aut. Ex eum nulla beatae ab
          beatae inventore iste pariatur voluptate dolores. Ea commodi ipsam
          quisquam corporis ratione inventore molestiae veniam incidunt enim
          quis. Molestiae dolores laudantium enim modi sit veritatis consectetur
          laudantium qui dicta eos dolore. Doloremque velit esse corporis quia
          quasi nesciunt. Quam adipisci laudantium sunt velit aspernatur beatae
          consequuntur architecto nisi ea quaerat tempora odit. Incidunt magni
          reprehenderit sunt aspernatur numquam consequatur numquam. Tempora
          sequi nesciunt laboriosam nemo dolore ipsum pariatur nemo. Ut
          laboriosam eaque commodi minima ullam commodi magni numquam incidunt
          magni unde autem quo. Architecto fugit magni vel reprehenderit labore
          sed beatae quia. Exercitationem omnis nulla esse est fugit voluptatem
          illo laboriosam sequi. Est perspiciatis voluptatem veritatis quo
          dolore voluptatem ipsa odit corporis suscipit sunt unde aspernatur.
          Dolorem aperiam eius veniam doloremque eum nesciunt dolore voluptatem
          ut. Esse eum aut aut ipsum nemo iure incidunt adipisci ipsum. Quasi
          vitae porro eum ullam ullam quasi consequatur vitae esse quis. Nemo
          consectetur dolor ullam tempora quaerat magni incidunt ullam
          architecto et. Vitae perspiciatis in amet vitae autem dolores enim.
          Non ipsum aspernatur qui quis nihil adipisci error voluptas neque
          commodi amet suscipit. Dolorem quisquam autem enim qui in voluptate.
          Minima eos explicabo sit consectetur porro error porro nisi esse
          nostrum quaerat. Labore illum doloremque accusantium voluptas suscipit
          dolorem vitae numquam omnis eius nemo labore. Sunt explicabo esse
          commodi eius minima quam consectetur qui exercitationem quae nisi ea
          exercitationem. Velit ipsum et beatae accusantium eius ipsam
          exercitationem. Consequatur eos ipsam vitae unde dolore doloremque
          architecto sed. Omnis quam enim nesciunt qui dicta odit quaerat. Error
          quaerat non aliquam consectetur quasi dicta aperiam labore inventore
          laboriosam nostrum. Qui omnis autem ab tempora dolore ipsam. Quam ad
          pariatur adipisci qui nemo incidunt corporis aliquam exercitationem
          eius corporis ipsum. Numquam nesciunt illum voluptate illo qui ab
          quasi. In labore nesciunt aperiam consequuntur et dolor explicabo
          numquam accusantium in. Doloremque quae quam beatae ullam quisquam
          inventore autem autem qui. Omnis rem totam eum illum amet dolorem
          porro aspernatur doloremque. Exercitationem accusantium tempora et
          nostrum nihil voluptatem inventore dolorem consequuntur vel. Magni
          magni fugit rem nostrum esse magni aliquam illum totam. Et rem fugiat
          quam ab tempora consequuntur totam velit dolores natus. Aliquid quis
          corporis quisquam ullam pariatur consequatur modi aspernatur voluptate
          veniam.
        </AppShell.Navbar.Body>
        <AppShell.Navbar.Footer>Navbar footer</AppShell.Navbar.Footer>
      </AppShell.Navbar>
      <AppShell.Body>Body</AppShell.Body>
    </AppShell>
  );
};

export default StoryWrapper;
