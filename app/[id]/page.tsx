import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { capitalizeFirstLetter } from "@/lib/stringHelpers";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id as string;

  return {
    description: `Get the latest updates in "${id}" worldwide`,
    title: `Aster News: ${capitalizeFirstLetter(id)}`,
  };
}

const News = ({ params }: Props) => {
  return (
    <div>
      <h1 className="capitalize">{params.id}</h1>
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt
        blanditiis ex asperiores. Doloremque porro fugiat corporis iusto dolore
        reprehenderit maxime eligendi perferendis. Porro accusamus ducimus
        explicabo placeat reprehenderit ut unde quod laudantium sed quos illum
        eveniet facere nam, aliquam assumenda beatae repudiandae a
        necessitatibus quis nesciunt voluptatibus? Aliquam qui, odit adipisci
        fugit, accusantium impedit, nostrum optio nulla facilis animi itaque
        minus voluptate eaque numquam explicabo excepturi iure dicta. Aliquid
        aspernatur dolores error iusto! Repellat ratione at quidem, maxime
        libero non ab nulla eos omnis? Nam repellat cum, fuga ut molestias,
        architecto sunt neque doloribus repellendus iure unde autem repudiandae.
        Praesentium dolore magnam numquam expedita. Deserunt nam hic corrupti
        illum qui eveniet reprehenderit autem quidem facilis rem accusamus
        necessitatibus excepturi, debitis adipisci sed dolorum et officiis
        possimus asperiores ab doloribus dolorem! Ab quia sint architecto cum
        nobis dicta culpa mollitia obcaecati incidunt, quisquam dolor porro
        voluptatibus iure modi, vel dolore qui nisi odit laudantium voluptate
        sunt nemo at ad necessitatibus. Expedita quibusdam recusandae enim nulla
        nesciunt, laborum assumenda autem totam fugit, repudiandae ab numquam
        consequuntur voluptas at incidunt! Dolores, atque exercitationem error
        tempora maxime, voluptatibus cupiditate, quia necessitatibus illo hic
        eos libero placeat. Excepturi amet, a, ab tempore eligendi temporibus
        laborum dolorum molestias fugiat esse natus, corporis quo? Accusantium,
        harum repudiandae perspiciatis distinctio obcaecati dolore esse atque
        rem modi, architecto itaque aliquid facilis consequuntur fuga excepturi
        magni minima nulla doloremque natus, velit delectus? Facere consectetur
        cupiditate nulla doloribus sit nesciunt maiores perferendis tenetur
        ratione, non odio vel voluptate aliquid ipsam obcaecati maxime, in cum
        sequi voluptatibus. Est voluptatibus veniam fugiat neque hic nihil amet
        consectetur! A sit illo nemo amet, expedita voluptate ratione dolorum
        saepe cumque, ipsum nobis magnam vitae. Non vitae laborum debitis
        blanditiis omnis. Cumque, voluptatum! Quod dolorem dolorum, facilis
        repudiandae beatae earum accusamus repellat ducimus sapiente eligendi,
        rerum ea, veritatis tenetur consequatur? Maiores, vero repellendus
        temporibus nesciunt accusamus soluta et quibusdam officia nostrum
        obcaecati voluptatum autem vel architecto odit harum pariatur?
        Aspernatur aliquam rerum tempora nobis consequuntur quae. Quae vitae
        aliquid dolor ex mollitia cumque repudiandae hic a est, omnis eius
        possimus blanditiis odio sequi fugiat cupiditate! Quo rerum eos labore,
        praesentium similique eius perferendis iusto porro illo beatae nemo est
        vel culpa magnam quisquam, consequatur dolor numquam asperiores sint
        laboriosam corporis. Blanditiis doloremque, inventore nulla beatae
        repellat eum ea repellendus sit voluptas! Eligendi repudiandae,
        doloribus commodi minima quae ut? A nulla nemo ut aliquid numquam eaque
        amet accusantium reiciendis perferendis officia recusandae aspernatur,
        magni modi ipsam quae explicabo quam, non esse quo! Aspernatur aut vitae
        repellendus iste, id non ad veritatis excepturi rem omnis aliquam
        exercitationem, pariatur fugiat doloribus ea veniam placeat nobis
        officia minima iure quis, dolores ex quibusdam voluptatem! Dolore porro
        voluptatem molestias eveniet. A esse dolores beatae illo consectetur
        corrupti incidunt repellat adipisci, ratione ullam necessitatibus
        officia tempora corporis iure ipsum aliquam consequatur. Eos in minima
        exercitationem dolore. Natus illum consectetur obcaecati ut vero
        voluptatibus dolore eligendi, reiciendis delectus eum facilis tempora
        tenetur deserunt eius sint rem sit provident neque sed error, saepe
        dolor dolores! Unde, sint excepturi accusamus mollitia repellat velit
        quam obcaecati laboriosam, ab accusantium harum praesentium error itaque
        quisquam recusandae magnam cum optio natus dolorum voluptatem suscipit
        amet iste neque! Voluptatibus quaerat error ex. Recusandae voluptatibus
        debitis dolores magni, quia excepturi doloremque voluptatum et ducimus
        fugit, non nulla aut eum nihil nisi expedita voluptas natus soluta quam
        culpa. Aliquid aliquam veritatis autem, quae aperiam laboriosam minus
        officiis cupiditate accusantium laudantium nisi rem voluptate distinctio
        quis doloremque earum iure qui dolore tenetur laborum. Ad, assumenda. Ab
        illo hic facere quo aspernatur, autem odit. Consequatur, eligendi
        obcaecati. Nulla culpa molestiae perferendis sequi nam aperiam et amet
        ipsa harum cum sint repellat iste suscipit a rerum optio id, eius iure!
        Excepturi, aliquam neque temporibus, et fugit rerum sed facilis
        consequuntur est ut sequi velit molestiae amet nisi sunt sint quaerat
        provident quas harum minima voluptatum! Accusantium eligendi ipsam
        tenetur suscipit totam non ipsa optio veritatis mollitia eum sit enim
        commodi maxime officiis corporis earum, nam ex perspiciatis corrupti,
        rem doloribus architecto officia dolor illum. Harum maxime quidem
        accusantium nesciunt, perspiciatis expedita laborum quis maiores
        provident qui sit veniam eaque error repellendus debitis, at iste quos
        deleniti soluta fugiat? Facilis accusamus impedit eius cumque odio minus
        nobis veritatis quisquam eos. Modi mollitia blanditiis a? Corporis,
        harum. Pariatur, ipsa commodi. Dolor qui vitae libero, aut voluptatibus
        est natus nisi tenetur praesentium! Voluptatum minus odio pariatur,
        repellendus dignissimos quisquam consequatur ullam eveniet asperiores
        tenetur aut maxime autem aperiam ea quas, accusamus aliquid quos.
        Reprehenderit atque maiores omnis? Dolor quo aut ipsa consequuntur
        temporibus unde eaque molestias officia laborum, vero harum iste ipsam?
        Corrupti optio omnis sequi placeat ab. Maiores dolor ullam iure
        doloribus rerum eveniet ea dolores, alias, placeat dolorem facilis eaque
        ex error quas provident possimus earum obcaecati! Cumque tenetur
        quibusdam, tempora ipsum aliquam corrupti blanditiis distinctio amet
        deserunt magni quasi accusamus doloremque at. In ipsa officia beatae
        reprehenderit voluptatem rem, eaque temporibus odit assumenda doloribus
        amet id, animi voluptatibus repellat eum similique corrupti voluptas
        labore impedit est vero, dolorem cum. Obcaecati, quis. Aliquam
        necessitatibus officia quidem ipsa dolores facilis. Natus, quibusdam
        cumque libero ducimus sunt reprehenderit maiores voluptate ea hic.
        Aperiam nostrum quos quaerat in minima? Omnis optio ipsa officia
        repellat laudantium eveniet voluptatum sint, ipsam perspiciatis
        cupiditate dignissimos. Iste maxime minus voluptatibus officiis repellat
        sunt inventore enim illo, libero laborum harum, incidunt quisquam itaque
        accusamus, quam blanditiis. Sed qui earum deleniti ratione quidem illo
        nobis ab fugit doloribus delectus vero officiis recusandae, dicta nam.
        Voluptas aperiam earum minima unde blanditiis assumenda amet quaerat
        ratione eos eveniet, maxime, rem et voluptatem atque architecto autem
        quia quos impedit accusamus odit nam! Optio fuga, labore cupiditate ex
        hic non praesentium minima, natus ullam dolores ad impedit odio! Minima
        assumenda sed maxime quibusdam error itaque perferendis, dolore atque
        totam, ullam cum maiores quaerat magnam. Recusandae, possimus
        repudiandae, explicabo nobis ratione nam rem perspiciatis modi voluptate
        quos temporibus dolor reprehenderit, eum aut neque ducimus laudantium
        voluptas quia suscipit at. Eveniet doloremque dicta voluptatem inventore
        eaque veritatis accusamus, reiciendis ullam maxime quos. Adipisci quam
        commodi voluptates cum ullam officiis molestias? Eaque inventore saepe
        nihil rerum. Cupiditate nostrum placeat voluptate minus animi non
        perspiciatis ipsam unde nobis iusto quas esse error debitis excepturi
        soluta maiores beatae cumque, sint fugit voluptatem voluptatibus! Eum
        nam odit qui ullam rem ipsum soluta cumque ea tempore, quod voluptas
        aspernatur mollitia corporis alias vitae repudiandae voluptates
        voluptate. Veniam laboriosam cumque ullam incidunt explicabo quisquam
        aspernatur. Voluptates rem earum impedit illum repellendus aliquam
        quidem voluptatibus ad. Consectetur architecto temporibus totam iure
        ducimus. Excepturi corporis, deserunt beatae cupiditate est, culpa cum
        dolores consectetur commodi pariatur totam repellendus obcaecati, eum
        iure nobis esse deleniti. Odio voluptatibus distinctio nam enim autem
        quos atque illo, tempora cupiditate alias ducimus vero sint eligendi
        neque consequuntur veniam explicabo quam ratione itaque ab omnis et?
        Beatae nostrum voluptas a illo obcaecati aperiam veniam perspiciatis
        dicta magni corporis! Natus cupiditate impedit voluptatem similique
        placeat sequi odio rerum quisquam! Temporibus odit nesciunt unde dolor
        beatae repellat quas. Quod aliquam voluptas ad veritatis rem distinctio
        a? Beatae magnam numquam fugiat eligendi natus, officia error
        consequuntur asperiores tenetur qui ipsum vero recusandae voluptatibus
        accusamus, delectus porro. Fugit eius magnam dicta odit impedit sapiente
        tempora obcaecati facilis vero assumenda ea, animi suscipit aliquam
        nesciunt autem totam libero numquam aliquid in debitis sit sed ipsum
        repellendus voluptas? Iste ex nihil, laudantium voluptatum molestiae
        aliquam! Aliquid doloremque sit consequatur minima aut eius consectetur,
        rerum molestias odit, quidem sequi voluptatem iste quas earum, omnis
        dolorum nobis libero! Sint officia nobis rerum amet ad! Quod deleniti et
        rerum expedita cum quisquam iure nemo non incidunt asperiores modi,
        eaque, dolor corrupti unde! Nobis adipisci doloremque nihil at id?
        Molestiae iusto ab aspernatur a dolorem, quo aliquam necessitatibus cum
        eius eum maiores non vero similique reiciendis mollitia, est dolorum
        quam amet id! Aspernatur, doloremque voluptatem? Ducimus voluptatibus
        minus, repellendus velit molestiae quo magnam modi, nisi obcaecati
        voluptatum quisquam ipsam accusantium odit nihil! Fugit sit nisi
        accusamus neque doloribus sed ad commodi nemo excepturi, eum eaque
        repellat! Reiciendis odio corporis odit doloribus. Quibusdam, aperiam
        aut ab cupiditate natus sint animi, quae magni illum dolores facere,
        laboriosam sed vel eos eum quisquam maxime voluptatem deleniti? Vel rem
        quia eligendi debitis ullam iure quasi, voluptates dolorum, eaque
        delectus voluptate. Quia dicta fugit explicabo dolores, exercitationem
        commodi voluptatum. Illo nostrum perspiciatis voluptas. Repellat,
        repellendus iusto perspiciatis minima fugiat vitae! Dolores, veniam
        culpa harum voluptatibus ea vero libero, hic reprehenderit praesentium
        voluptatem modi facilis iure laborum impedit, error eaque voluptas.
        Adipisci qui cupiditate nihil minus necessitatibus quibusdam commodi
        aspernatur nisi a veritatis ipsa dolore dolores doloribus consequuntur
        blanditiis eos ipsum sed, nulla corrupti similique esse quam obcaecati
        nesciunt. Ipsam assumenda, sed blanditiis nisi amet cupiditate dolor
        provident pariatur necessitatibus id sint! Quam assumenda consectetur id
        ex commodi possimus. Iusto reiciendis libero omnis voluptates dolor
        dolorum commodi quae ex natus, mollitia sunt amet beatae. Beatae tenetur
        maiores cum explicabo, omnis laboriosam odit, reiciendis iure nemo dicta
        quibusdam nostrum maxime! Ex dolores dolore explicabo a suscipit aperiam
        facilis provident quasi, accusamus voluptatibus iusto vero modi pariatur
        illum veniam id laborum tempore aliquam mollitia dolorum vitae in!
        Quibusdam ducimus illum, aliquam optio eum maiores nulla dolore quam
        maxime cumque eos aperiam facere eius ut. Fuga, veritatis! Explicabo
        numquam molestias itaque laborum expedita, incidunt at, harum sunt sed
        omnis alias nisi sequi nobis libero. Quas voluptates nostrum iure cumque
        velit non amet maxime! Blanditiis praesentium voluptate dolor error,
        beatae eius totam libero repellendus veniam quidem minima, nostrum in
        odit quasi dicta sequi. Quaerat quisquam quae assumenda suscipit dolore
        dolor quibusdam ipsa! Saepe magnam dolore assumenda explicabo provident
        voluptatibus, velit vero minima quisquam quidem quibusdam, recusandae
        harum! Iste minima suscipit eaque eligendi illo dicta, cupiditate
        dolore, molestiae illum, animi ratione quo sit? Voluptatibus laudantium
        ratione aliquid commodi accusantium, delectus atque ab iure! Velit
        dolore laudantium vero numquam sit beatae nulla quo officiis autem dicta
        at, sunt, error similique qui iure quisquam est possimus quidem saepe
        ipsum impedit! Debitis impedit similique voluptas vitae cupiditate qui
        tempora, molestias iure dolorem suscipit incidunt soluta aut ipsam nam
        possimus dolorum magnam, placeat eligendi nisi perferendis, magni
        commodi mollitia. Corrupti sint inventore hic tempore laborum quia
        labore iste! Laborum tenetur ex ullam dolorum blanditiis temporibus
        dolores, sequi error, eligendi eius quaerat aperiam quae distinctio
        sapiente optio libero possimus amet fugit molestiae dolore saepe cum!
        Deleniti laborum nihil pariatur fugiat minima! Facilis, laborum
        excepturi ex placeat illo dolor sint molestiae neque nesciunt molestias,
        eos, quo amet! Tenetur perspiciatis culpa minima sequi ipsam nemo quod
        repudiandae nihil quasi molestias accusantium, earum quia delectus
        illum? Commodi fuga magnam esse dolorem expedita animi quos consequuntur
        nam quaerat laudantium tempore, architecto nobis obcaecati ad, autem eos
        eius. Distinctio ipsam ab sequi minima, nostrum ad quibusdam fugit illum
        voluptatum reiciendis aliquid explicabo. Rem suscipit vero unde natus
        et, id iste laborum. Deserunt atque mollitia sed suscipit molestiae
        nobis tenetur sapiente dicta temporibus perferendis eveniet saepe
        repudiandae quos vero, architecto at! Quam magni dolore ducimus cum
        mollitia a, hic totam et distinctio quia eveniet sapiente quos quod
        voluptatem natus accusamus! Quam unde voluptatibus quae corporis autem
        dicta veniam magnam asperiores! Commodi, suscipit laudantium! Est omnis
        temporibus corrupti explicabo commodi? Aperiam necessitatibus saepe
        architecto explicabo consequatur sunt? Autem laborum dicta asperiores
        quos unde praesentium quaerat amet veniam quibusdam, molestias ratione
        id quas repellat pariatur quidem. Modi inventore assumenda laboriosam
        saepe minima obcaecati aperiam in excepturi maxime ad. Molestiae fuga
        est alias vero, quibusdam aliquid voluptates voluptatibus iste! A modi
        sit hic eligendi, voluptatem, officiis pariatur nihil ratione excepturi
        minus ipsam omnis in consectetur at rerum itaque magnam illum, magni
        quod possimus! Distinctio molestias deserunt commodi at praesentium
        ratione ipsum expedita est quam eveniet eos, dolorem alias non
        consequatur cum recusandae molestiae accusantium quod porro, quasi
        impedit nostrum. Quis aut tempora et molestias ducimus perspiciatis
        omnis ut. Voluptate quibusdam cum animi. Illo cumque rem pariatur quidem
        dolorum ipsam numquam fugit obcaecati temporibus ipsum blanditiis sit
        mollitia esse suscipit, beatae corporis veritatis deleniti error ratione
        animi nisi earum vel magni? Doloribus, suscipit quibusdam? Voluptate
        quam provident sequi ratione, tempora fugit asperiores, odit distinctio
        minus nostrum repellat in incidunt laborum illum, cumque eos vitae non!
        Veritatis consequuntur repellat tempore exercitationem quos eligendi
        aperiam incidunt a explicabo quisquam qui ab eveniet illo ex labore id,
        asperiores atque expedita numquam ipsa dicta reiciendis officia!
        Consequuntur molestiae dignissimos reiciendis sit! Perferendis neque hic
        tempora cupiditate voluptatibus fuga omnis vero totam consequatur
        aperiam quo voluptate exercitationem reiciendis, nisi commodi nobis,
        officia aliquid asperiores fugit fugiat! Ab voluptas dicta quam
        reprehenderit ad, consectetur nemo eos earum quas atque cum molestiae
        placeat voluptatum nulla eius? Neque quos itaque quibusdam iure
        voluptatum earum expedita et sint commodi ullam provident delectus,
        laudantium aliquam pariatur nulla accusantium similique sunt officia.
        Aliquam iusto veniam adipisci at quidem libero deserunt velit esse. Nemo
        ipsum illum dolor, incidunt minus mollitia, nesciunt, repellendus
        aliquid tenetur cumque est eligendi nostrum. Rem ullam vero doloremque
        perferendis nesciunt itaque impedit expedita, adipisci corrupti iure
        explicabo placeat reprehenderit deleniti dicta cum labore necessitatibus
        esse quia ad optio atque nulla deserunt quisquam! Dolores ipsa
        architecto autem fuga. Mollitia blanditiis deserunt possimus assumenda
        facere provident soluta quasi ducimus vel sint, animi repudiandae?
        Pariatur, qui. Doloribus esse aliquam iure voluptates dolores incidunt
        officia voluptatibus asperiores tempore unde! Porro asperiores veritatis
        modi minima esse aliquid? Assumenda voluptate rem id quidem modi odio
        recusandae, animi delectus voluptates illum fugit cum provident vel
        autem! Atque quasi reiciendis libero vel velit voluptate error rerum
        perspiciatis aperiam earum voluptatibus, non, porro laborum excepturi
        numquam. Tenetur, ea debitis aliquid ut saepe, a maxime ipsam et, eius
        aut ad nesciunt placeat nulla facere odit assumenda eligendi
        reprehenderit sunt velit in harum esse omnis corrupti voluptates! Iste
        nulla ducimus laborum quo eligendi vel soluta error ipsum exercitationem
        obcaecati aliquid cum odio, unde nihil aperiam ipsa voluptatibus
        consectetur esse omnis, dolor laboriosam? Ipsa suscipit assumenda esse
        sunt id dolor maiores delectus ut molestias nisi provident consequatur
        voluptas, repellat cumque similique quidem asperiores. Voluptatem
        necessitatibus a optio aspernatur, vel quae nam fugit voluptatibus
        recusandae ad, praesentium, provident assumenda commodi expedita libero
        quasi unde quia doloribus? Sapiente obcaecati porro explicabo sequi,
        distinctio dolores saepe minima optio nulla, quasi ad. Obcaecati
        repellendus eum iusto aliquam non, porro optio ducimus ut nostrum
        cupiditate, perferendis veritatis explicabo nam adipisci eveniet esse
        dolor facilis aperiam iste. Ratione soluta, quas earum quo explicabo
        vero perspiciatis obcaecati asperiores velit ea aliquam beatae hic
        necessitatibus exercitationem odit maiores unde fugit! Qui doloremque
        aut magnam dignissimos, et corporis at excepturi ea quaerat mollitia
        amet ipsum nostrum expedita dolor distinctio tempora voluptatibus
        pariatur similique eius optio, accusantium minus, asperiores quae.
        Debitis voluptas assumenda voluptates corrupti iure, incidunt velit
        numquam earum! Delectus veniam numquam non beatae accusamus. Inventore,
        vero? Vitae sit alias veritatis officia, recusandae atque modi
        voluptatum debitis! Aspernatur asperiores, laborum accusamus dolore
        accusantium ad omnis ut aliquid repellendus doloribus sequi officiis
        enim praesentium adipisci labore obcaecati sit at itaque perferendis
        modi blanditiis? Saepe quod explicabo ipsa ut qui. Optio voluptate eos
        consequatur debitis aut inventore veniam dolorem? Pariatur enim tempora
        obcaecati fugiat dolores accusantium fugit! Eius nesciunt voluptatum
        molestiae aut autem nihil eum ex. Alias laboriosam placeat illo earum
        deleniti vero quo quasi consequatur doloribus eligendi, animi ipsum
        eaque asperiores quos numquam! Debitis enim odit rem sit repellendus
        consequuntur asperiores maxime eveniet doloremque voluptatibus ipsum
        illo esse veniam ipsa odio nemo aliquam inventore at, minus modi minima
        expedita provident corporis. Laudantium ut veritatis optio unde
        voluptate numquam asperiores sint consectetur aperiam perspiciatis?
        Voluptas eligendi eum nesciunt obcaecati dolor dicta voluptatem
        inventore deleniti amet ipsum? Hic perferendis ea quo qui dignissimos
        recusandae dolores, mollitia voluptates? Error quo aut in alias dolor,
        possimus at dolorem eligendi neque corrupti sequi minus. Ipsa pariatur
        molestiae, modi aspernatur quos, aliquam beatae amet consectetur
        expedita vero illo tenetur esse voluptates similique vel ipsam ratione
        incidunt consequuntur quidem nam, velit doloribus porro. Perferendis
        error omnis tenetur atque asperiores velit, nobis qui fugiat cupiditate,
        accusantium repellendus labore est praesentium aut, reprehenderit illo
        minima libero fuga facere. Sequi perferendis eius cupiditate fugiat
        excepturi error eaque corporis temporibus, quidem iste nulla! Quaerat
        libero perferendis porro, quos in rerum sed tempore rem dolores quo
        corporis placeat quibusdam ab officia explicabo blanditiis id laudantium
        beatae voluptates reprehenderit natus assumenda unde! Ratione blanditiis
        laboriosam eum quasi vel ipsa optio asperiores expedita inventore
        repudiandae laborum nemo quia esse impedit, quisquam excepturi at illo
        totam? Quidem dignissimos consequuntur, ad veniam qui provident, aut
        error corrupti quae nobis est nemo fugit ut sint recusandae labore
        voluptates, necessitatibus veritatis velit perspiciatis dolore
        molestiae. Delectus debitis natus libero. Quis aspernatur dolorum quo ut
        commodi alias doloremque earum, libero modi voluptas velit odio harum
        in, delectus tenetur cupiditate saepe repudiandae perferendis
        accusantium nesciunt suscipit molestiae optio iure nisi! Cum libero nisi
        similique tempora cumque impedit, dolorem esse dolore, provident
        molestias fugiat inventore magnam nulla atque cupiditate nobis suscipit,
        voluptatum pariatur sint fugit distinctio. Consequatur cupiditate, aut
        minus suscipit quaerat et voluptatibus cumque veniam ipsum, consequuntur
        eligendi. Natus illum, minima asperiores numquam veniam obcaecati
        temporibus amet, doloremque repellendus distinctio atque, facilis nisi.
        Earum sunt neque quia deleniti. Id quas, quisquam fugiat voluptate harum
        quia, placeat atque, autem facilis sequi quam expedita quaerat. Eum nemo
        sed optio recusandae eius soluta facilis animi, quia sapiente incidunt.
        Reiciendis alias at fugit voluptates ut ab autem possimus quos,
        reprehenderit consequatur ipsa aliquam quam maxime minus necessitatibus
        dolorum porro, error numquam laborum. Libero adipisci iste earum sunt
        eius ad nesciunt impedit natus veniam suscipit, tempora, hic veritatis
        dolor dicta ut tenetur, ducimus assumenda placeat iure. Minima pariatur
        facilis ipsam nihil ducimus? Ducimus sit quis consequuntur recusandae,
        voluptas alias illo voluptatum aliquid iste culpa ex rem architecto a
        magni sapiente earum minus, voluptates quibusdam neque! Neque omnis,
        exercitationem vel voluptas perspiciatis iste cumque autem numquam porro
        adipisci voluptatem labore! Sed, molestias? Fugiat quam labore
        consequatur rem dicta nostrum animi ex necessitatibus vero iure
        recusandae, sint quisquam voluptatibus! Debitis quod libero quas ratione
        corrupti nobis reiciendis id at, rerum nesciunt, sequi suscipit,
        architecto voluptate quasi voluptas dolore fugiat praesentium ab
        voluptatem vel! Odio nulla earum velit assumenda nam sint, voluptate
        numquam voluptates voluptatem, consequatur pariatur quasi.{" "}
      </p>
    </div>
  );
};

export default News;
