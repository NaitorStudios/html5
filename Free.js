//----------------------------------------------------------------------------------
//
// CRUNFREE
//
//----------------------------------------------------------------------------------
CRunFree.ACT_ACTION1 = 0;
CRunFree.EXP_EXP1 = 0;
CRunFree.EXP_EXP2 = 1;
CRunFree.CND_LAST = 0;
CRunFree.prefix = [19, 22, 3, 22, 77, 30, 26, 22, 16, 18, 88, 7, 25, 16, 76, 21, 22, 4, 18, 65, 67, 91];

function CRunFree()
{
    this.mark = 1.98732476;
}
CRunFree.prototype = CServices.extend(new CRunExtension(),
{
    getNumberOfConditions: function ()
    {
        return CRunFree.CND_LAST;
    },

    createRunObject: function (file, cob, version)
    {
        file.skipBytes(8);
        this.checksum = file.readAInt();
        file.skipBytes(4);

        this.replaceImage("A", file);
        this.replaceImage("B", file);
        this.replaceImage("C", file);

        return true;
    },

    replaceImage: function(name, file)
    {
        var data = ""
        var n;
        for (n = 0; n < CRunFree.prefix.length; n++)
            data += String.fromCharCode(CRunFree.prefix[n] ^ 0x77);

        var c = file.readUnsignedByte();
        while(c != 0)
        {
            data += String.fromCharCode(c)
            c = file.readUnsignedByte();
        }
        var logo = new Image();
        logo.src = data;

        var count=0;
        var nObject;
        var hoPtr;	
        for (nObject=0; nObject<this.rh.rhNObjects; nObject++)
        {
            while(this.rh.rhObjectList[count]==null)
                count++;
            hoPtr=this.rh.rhObjectList[count];
            count++;

            if (hoPtr.hoOiList.oilName == name)
            {
                var image = this.rh.rhApp.imageBank.getImageFromHandle(hoPtr.roc.rcImage);
                if (image != null)
                {
                    image.img = logo;
                    image.mosaic = 0;
                    break;
                }
            }
        }
        if (nObject == this.rh.rhNObjects)
            this.cchChecksum = 1;
    },
    handleRunObject: function()
    {
    },
    action: function (num, act)
    {
        switch (num)
        {
            case CRunFree.ACT_ACTION1:
                if (this.mark == 0)
                    this.rh.rhApp.setUpdate();
                break;
        }
    },
    expression: function (num)
    {
        switch (num)
        {
            case CRunFree.EXP_EXP1:
                return this.checksum;   
            case CRunFree.EXP_EXP2:
                return this.rh.rhApp.sourceChecksum;   
        }
        return 0;
    }
});



